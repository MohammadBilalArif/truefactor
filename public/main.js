
window.s = {
  step: 120
}

function toggleMenu(){
  $('.menu').toggle();
  $('.main').toggle();
}

function QR(text){
  var canvas = document.getElementById('canvas');
  var qr = new JSQR();
  var code = new qr.Code();
  code.encodeMode = code.ENCODE_MODE.UTF8_SIGNATURE;
  code.version = code.DEFAULT;
  code.errorCorrection = code.ERROR_CORRECTION.M;

  var input = new qr.Input();
  input.dataType = input.DATA_TYPE.URL;
  input.data = {
    "url": text
  };

  var matrix = new qr.Matrix(input, code);
  matrix.scale = 4;
  matrix.margin = 2;

  var newcanvas = canvas //document.createElement('canvas');
  //canvas.appendChild(newcanvas);

  newcanvas.getContext('2d').fillStyle = 'rgb(0,0,0)';
  newcanvas.setAttribute('width', matrix.pixelWidth);
  newcanvas.setAttribute('height', matrix.pixelWidth);

  matrix.draw(newcanvas, 10, 10);
}


function gen(len) {
  var set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var arr = new Uint8Array(len);
  window.crypto.getRandomValues(arr);
  return [].map.call(arr, function(n) { return set[n % set.length]; }).join("");
};


function hmac(s, m){
  return CryptoJS.HmacSHA1(m, s).toString();
}

function sha1(m){
  return CryptoJS.SHA1(m).toString()
}


hexToBytes = function(hex) {
  var bytes = [];
  for(var c = 0, C = hex.length; c < C; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

function toOTP(hex){
  var h = hexToBytes(hex);
  
  var offset = 0;
  var v = (h[offset] & 0x7f) << 24 |
    (h[offset + 1] & 0xff) << 16 |
    (h[offset + 2] & 0xff) << 8  |
    (h[offset + 3] & 0xff);
  
  var offset = 4;
  var v2 = (h[offset] & 0x7f) << 24 |
    (h[offset + 1] & 0xff) << 16 |
    (h[offset + 2] & 0xff) << 8  |
    (h[offset + 3] & 0xff);

  v = (v % 1000000)+'';
  v2 = (v2 % 1000000)+'';
  v = Array(7-v.length).join('0') + v 
  v2 = Array(7-v2.length).join('0') + v2;

  return v + v2;
}

function toHuman(otp){
  var l = 4;
  if(localStorage.letters == 'true'){
    otp = parseInt(otp).toString(32).toUpperCase();
    return [otp.substr(0, l),otp.substr(l, l)].join(' ')
  }else{
    return [otp.substr(0, l),otp.substr(l, l),otp.substr(l*2,l)].join(' ')
  }
}

function $$(id){
  return document.getElementById(id);
}

function log(m){
  console.log(m)
  //$$('log').innerHTML+=(m)+"<br>"
}

function getPeriod(){
  var epoch = Math.round(new Date().getTime() / 1000.0);
  return Math.floor(epoch / s.step);
}

Vault = {
  getProfile: function(id){
    return Vault.getVault().profiles[id];
  },

  getVault: function(fn){
    var vault = {
      profiles: {},
      custom: {},
      origins: {}
    };

    if(localStorage['vault']){
      this.ensurePassphrase("Enter your passphrase")
      var decrypted = this.decrypt(localStorage['vault'])
      if(decrypted.length > 0){
        var vault = JSON.parse(decrypted);
      }
    }else{
      this.ensurePassphrase("Set your passphrase");
    }
    return vault;
  },
  saveVault: function(vault, skip_sync){
    log('saving vault ');
    if(!skip_sync){
      sync();
    }
    localStorage['vault'] = this.encrypt(JSON.stringify(vault));
  },
  encrypt: function(t){
    return CryptoJS.AES.encrypt(t, localStorage.passphrase).toString();
  },
  decrypt: function(t){
    return CryptoJS.AES.decrypt(t, localStorage.passphrase).toString(CryptoJS.enc.Utf8);
  },
  ensurePassphrase: function(m){
    if(!localStorage.passphrase){
      var pass = "default"; //prompt(m)
      localStorage.passphrase = hash(pass);
      var cache_seconds = 300;
      /*
      setTimeout(function(){
        delete(Vault.passphrase);
      },cache_seconds * 1000)
      */
    }
  }
}

function hash(s){
  // make potential bruteforce harder
  for(var i=0;i<100000;i++){
    s=CryptoJS.SHA1(s).toString()
  }
  return s.toString();
}

function backup(){
  var v = Vault.getVault();
  if(token = prompt("Token of this device is "+v.sync_token+". Enter token of the device you want to pair with.")){
    if(token.length == 8){
      $.post('/vaults/pair',{
        sync_token: v.sync_token,
        pair_token: token
      }, function(r){
        if(r.status == 'ok'){
          alert("Your devices are paired. You can use 2 factors now!");
        }else{
          alert(r.status);
        }

      })

    }else{
      alert("Invalid token format");
    }

  }
}

function sync(){


  $.post('/vaults',{
    encrypted_vault: localStorage.vault,
    sync_token: Vault.getVault().sync_token
  },function(r){
    if(r.sync_token){
      //first sync?
      var v = Vault.getVault();
      v.sync_token = r.sync_token;
      v.sync_token2 = r.sync_token2;
      Vault.saveVault(v, true); //skip sync
    }
    if(r.encrypted_vault){
      localStorage.vault = r.encrypted_vault;
    }
  })
}

function push(m){
  $.post('/vaults/push',{
    encrypted_message: Vault.encrypt(JSON.stringify(m)),
    sync_token: Vault.getVault().sync_token    
  },function(){})
}

function pull(){
  var sync_token = Vault.getVault().sync_token;
  if(sync_token){
    $.post('/vaults/pull',{
      sync_token: sync_token 
    },function(r){
      if(r.success){
        if(r.messages.length > 0){
          for(var i =0;i<r.messages.length;i++){
            process_message(JSON.parse(Vault.decrypt(r.messages[i].encrypted_message)));
          }

        }else{
        }
      }
    })
  }
}


function process_message(r){
  if(r.addKeys){
    if(confirm("Add second key for "+r.tfid+" on "+r.origin)){
      v = Vault.getVault();
      if(!v.origins[r.origin]) v.origins[r.origin] = {};
      v.origins[r.origin][r.tfid] = {seeds: [,r.seed]};
      Vault.saveVault(v);
      push({
        removeKeys: true,
        origin: r.origin,
        tfid: r.tfid
      })
    }
  }
  if(r.removeKeys){
    if(r.origin == params.origin && r.tfid == params.tfid){
      v = Vault.getVault();
      v.origins[r.origin][r.tfid].seeds[1] = null;
      Vault.saveVault(v);
    }
  }
  if(r.getSigs){
    log('get sigs')
    authRequest({
      challenge: r.challenge,
      origin: r.origin,
      tfid: r.tfid,
      primary: false
    })
  }
  if(r.returnSigns){
    if(r.signs[0]){
      $$('otp0').value = r.signs[0];
    }
    if(r.signs[1]){
      $$('otp1').value = r.signs[1];
    }
    log('return sigs '+r.signs.join("/"))
  }


}

function build(){
  var v = Vault.getVault();
  $('#main').show();
  $('#authrequest').hide();


  if(Object.keys(v.origins).length > 0){

    var table = "";    

    for(origin in v.origins){
      if(!v.origins.hasOwnProperty(origin)) continue;

      var filter_origin = origin.replace(/^https?:\/\//,'');
      filter_origin = filter_origin[0].toUpperCase() + filter_origin.substr(1);
      table += "<div onclick=\"return authRequest({origin:'"+origin+"',manual:true,challenge:'login'});\" class='area blue' ><a>"+filter_origin+"</a><span style='float:right'></span></div>";
    }
    $('#origins').html(table);

  }else{
  }
  return false;

}

function registerRequest(params){
  window.params = params;
  $('#authrequest').show();
  $('#main').hide();
  $('.buttons').show();



  $('#origin').text(params.origin);
  $('#message').parent().parent().hide();
  $('#tfid').parent().parent().hide();

  $('#otpmix').parent().parent().hide();
  $('#otp0').parent().parent().hide();
  $('#otp1').parent().parent().hide();

  if(params.request_fields){
    var return_fields = [];
    if(params.request_fields.indexOf('username') != -1){
      $('#username').parent().parent().show();
      return_fields.push('username');
      var tfid_type = 'username';
    }
    if(params.request_fields.indexOf('email') != -1){
      $('#email').parent().parent().show();
      return_fields.push('email');
      var tfid_type = 'email';
    }  
  }

  $('.approve').val("Sign Up")
  
  $('.approve').click(function(){
    var vault = Vault.getVault();
    if(!params.seeds){
      params.seeds = [gen(20), gen(20)];
    }


    if(!vault.origins[params.origin]){
      vault.origins[params.origin] = {}
    }
    var tfid = $$(tfid_type).value;

    vault.origins[params.origin][tfid] = {
      seeds: params.seeds
    }

    Vault.saveVault(vault);

    var obj = {
      action: "seeds",
      data: params.seeds,
      custom: {}
    }

    for(var i in return_fields){
      var name = return_fields[i];
      obj.custom[name] = $$(name).value
    }
    if(params.manual){
      alert('The record has been saved');
      build();
    }else{
      opener.postMessage(obj,params.origin)
    }
  })

}






function authRequest(params){
  window.params = params;

  $('#authrequest').show();
  $('#main').hide();


  var vault = Vault.getVault();
  if(vault.origins[params.origin]){
    var profiles = vault.origins[params.origin];
  }else{
    var profiles = false;
  }

  // if second seed is 2fa make a push authRequest

  notfound = function(){
    opener.postMessage({
      action: "notfound"
    }, params.origin);
  }  

  $('.deny').click(notfound);
  $('.approve').click(function(){
    var message_to_sign = params.challenge+":"+getPeriod();
    mix_sign = $$('otpmix').value;
    var signs = [];
    signs[0] = $$('otp0').value;
    signs[1] = $$('otp1').value;
    if(params.primary){
      if((signs[0] && signs[1]) || mix_sign){

        if(mix_sign){
          signs = [mix_sign];
        }
        var tfid = $('#tfid').val();
        if(!tfid){
          tfid = $('#email').val();
        }
        opener.postMessage({
          action: "signs",
          data: signs,
          custom: {
            email: tfid
          }
        }, params.origin);        

      }else{
        if(signs[0] || signs[1]){
          alert("Please confirm on another device");
        }else{
          alert("Please enter your code/codes");
        }
      }
    }else{
      push({
        returnSigns: true,
        signs: signs
      })
      //show thumbsup

    }
    return false;
  })


  $('#origin').text(params.origin);

  if(!params.challenge){
    params.challenge = 'login';
  }

  $$('message').value = params.challenge;
  if(params.challenge == 'login' && !params.manual){
    $('#message').parent().parent().hide();
    $('.approve').val("Sign In")
  }
  
  if(params.challenge != 'login'){
    QR("http://truefactor.io/#auth/"+encodeURIComponent(params.origin)+"/"+params.challenge);
  }



  $$('message').onkeyup = function(){
    var m = $$('message')
    params.challenge = m.value;

    authRequest(params);
  };

  if(!profiles){
    notfound(); 
    /*
    $('#tfid').parent().parent().hide();

    var type = params.request_fields[0];
    if(['email','username'].indexOf(type) != -1){
      $('#'+type).parent().parent().show();
    }*/
    return false;
  }


  var all_ids = Object.keys(profiles);

  if(!params.tfid){
    params.tfid = all_ids[all_ids.length-1];
  }else{
    if(all_ids.indexOf(params.tfid) == -1){
      return notfound();
    }

  }

  var profile = profiles[params.tfid];
  var seeds = profile.seeds;
  $('#tfid').empty();

  for(i in profiles){
    var selected = ''
    if(params.tfid == i){
      var selected='selected'
    }
    var option = $('<option '+selected+'>'+i+'</option>')
    $('#tfid').append(option);
  }
  $$('tfid').onchange = function(){
    params.tfid = $(this).val();
    authRequest(params);
  }



  if(seeds[0] && seeds[1]){

  }else{

    // in same pair
    if(params.primary){
      push({
        getSigs: true,
        signs: params.signs,
        challenge: params.challenge,
        origin: params.origin,
        tfid: params.tfid
      })
    }
  }

  if(params.signs){
    //verify!
    verify_signs = params.signs.split(':');



  }else{
    if(params.manual){
      $('#clock').show();
      $('.buttons').hide();
    }else{
      $('.buttons').show();
    }    
  }


  var update_otp = function(){
    var message_to_sign = params.challenge+":"+getPeriod();
    if(params.signs){
      var verify_signs = params.signs.split(':');
    }

    if(seeds[0] && seeds[1]){
      var concat = toOTP(hmac(seeds[0], message_to_sign)) + toOTP(hmac(seeds[1], message_to_sign));
      if(verify_signs){
        if(concat == verify_signs.join('')){
          $('.verified').show().html("Valid!");
        }else{
          $('.verified').show().html("Invalid!");
        }
        clearInterval(window.updater);
      }

      s.both = toHuman(toOTP(sha1(concat)));
      if($$('otpmix').value != s.both){
        $$('otpmix').value = s.both;
      }
      if(params.manual){
        $('#otpmix').parent().parent().show();
        $('#otp0info').parent().hide();
        $('#otp1info').parent().hide();        
      }

    }else{
      if(seeds[0]){
        var exist = 0;
      }else{
        var exist = 1;
      }
      if(params.manual){
        $('#otpmix').parent().parent().hide();
        $('#otp0info').parent().show();
        $('#otp1info').parent().show();
      }

      var otp = toOTP(hmac(seeds[exist], message_to_sign));

      if(verify_signs && otp == verify_signs[exists]){
        $('.verified').show().html("One of signatures is valid! Check another device.");
        clearInterval(window.updater);
      }

      var humanOtp = toHuman(otp);
      if($$('otp'+exist).value != humanOtp){
        $$('otp'+exist).value = humanOtp;
      }
    }
  }
  if(window.updater){
    clearInterval(window.updater);
  }

  window.updater = setInterval(update_otp,1000);
  update_otp();

  return false;
}

function factorize(){
  var origin = params.origin;
  var tfid = params.tfid;
  var v = Vault.getVault();
  if(v.paired){
    alert("Check another device");

    var profile = v.origins[origin][tfid];
    push({
      addKeys: true,
      origin: origin,
      tfid: tfid,
      seed: profile.seeds[1]
    })
  }else{
    alert("You haven't added Secondary Device yet.");
  }
}

/*
document.addEventListener('webkitvisibilitychange', function(){
  if(document.visibilityState == 'visible'){
    //pull(20);
  }
})
*/

window.onmessage = function(e){
  window.e = e;
  var message = e.data;
  var origin = e.origin;
  log("Received "+JSON.stringify(message)+" from "+origin);

  if(message.action == 'auth'){
    authRequest({
      origin: origin,
      tfid: message.tfid,
      challenge: message.challenge,
      request_fields: message.request_fields,
      primary: true,
      signs: message.signs
    })
  }

  if(message.action == 'register'){
    registerRequest({
      origin: origin,
      tfid: message.tfid,
      seeds: message.seeds,
      request_fields: message.request_fields
    })
  }

}

window.onload = function(){
  Visibility.every(5000, function () {
    pull();
  });

  $('.back').click(function(){
    build();
  });

  $('body').on('click','.factorize', function(){
    factorize($(this).parent().data('origin'), $(this).parent().data('username'));
  })

  $('body').on('click','.delete', function(){
    v=Vault.getVault();
    delete(v.origins[params.origin][params.tfid])
    if(Object.keys(v.origins[params.origin]).length == 0){
      delete(v.origins[params.origin]);
    }
    Vault.saveVault(v);
    build();
    return false;
  })

  var hash = location.hash.substr(1);

  if(hash.length > 0){
    hash = hash.split('/');

    /* obsolete

    if(hash[0] == 'import'){
      var v = Vault.getVault();
      if(tok = location.hash.slice(8)){
        v.sync_token = tok;
      }else{
        v.sync_token = prompt("Your sync token?");
      }
      // check for existing
      Vault.saveVault(v, true);
      delete(location.hash=''); 
      build();

    }
    */

    if(hash[0] == 'reg'){
      registerRequest({
        seeds: [hash[2], hash[3]],
        origin: decodeURIComponent(hash[1]),
        request_fields: hash[4],
        manual: true
      })

    }
    if(hash[0] == 'auth'){
      authRequest({
        challenge: hash[2],
        origin: decodeURIComponent(hash[1]),
        tfid: hash[3],
        manual: true
      })
    }

    if(hash[0] == 'verify'){
      authRequest({
        challenge: hash[2],
        origin: decodeURIComponent(hash[1]),
        tfid: hash[3],
        manual: true
      })
    }


  }else{
    if(opener){
      opener.postMessage({action: 'ready'}, '*');
    }else{
    }
    build();
  }


  var vault = Vault.getVault();
  fields = ['username', 'email']

  for(i in fields){
    var field = fields[i]
    obj = $$(field);
    if(vault.custom[field]){
      obj.value = vault.custom[field];
    }
    obj.onchange = function(){
      vault = Vault.getVault();
      vault.custom[this.id] = this.value;
      Vault.saveVault(vault)
    }
  }
  
  if(localStorage.letters == 'true'){
    document.getElementById('letters').checked = true;
  }

  var element = document.getElementById('clock');

  var seconds = new ProgressBar.Line(element, {
    duration: 200,
    color: "#f00",
    trailColor: "#eee"
  });
  var anim = function() {
    var second = Math.round(new Date().getTime() / 1000.0) % s.step;
    seconds.animate(second / s.step, function() {
        //seconds.setText(120-second);
    });
  };
  anim()
  setInterval(anim, 1000);

}