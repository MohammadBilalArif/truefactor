
window.s = {
  step: 120
}
var id_length = 24;

Vault = {
  custom: {},
  apps: {},
  origins: {},
  peers: [],
  root: [],
  keypairs: [],
  notes: 'Any text data - only you have access to it'
}

function toggleMenu(){
  $('.menu').toggle();
  $('.main').toggle();
}

function QR(text, canvas){
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

  canvas.getContext('2d').fillStyle = 'rgb(0,0,0)';
  canvas.setAttribute('width', matrix.pixelWidth);
  canvas.setAttribute('height', matrix.pixelWidth);

  matrix.draw(canvas, 10, 10);
}


function gen(len, password) {
  var set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var arr = new Uint8Array(len);
  window.crypto.getRandomValues(arr);
  var str = [].map.call(arr, function(n) { return set[n % set.length]; }).join("");
  if(password){
    str += "$!1"; // password requirements...
  }
  return str;
};

// SHA1 is being depraciated by browsers and that the deadline for its scheduled disappearance is 2016-12-31
// so we use SHA256

function hmac(s, m){

  var hmac = forge.hmac.create();
  hmac.start('sha256', s);
  hmac.update(m);
  return hmac.digest().toHex();
  //return CryptoJS.HmacSHA256(m, s).toString();
}

function sha256(m){
  var md = forge.md.sha256.create();
  md.update(m);
  return (md.digest().toHex());
  //return CryptoJS.SHA1(m).toString()
}


hexToBytes = function(hex) {
  var bytes = [];
  for(var c = 0, C = hex.length; c < C; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

function toOTP(hex, len){


  var v = hexToDec(hex);
  var pad = 33-v.length;
  if(pad > 1)
  v = Array(pad).join('0') + v;
  
  if(!len) len = 12;
  return v.substr(-len,len);

  /*
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
  v = Array(7-v.length).join('0') + v;
  v2 = Array(7-v2.length).join('0') + v2;

  return v + v2;
  */


}


// Adds two arrays for the given base (10 or 16), returning the result.
// This turns out to be the only "primitive" operation we need.
function add(x, y, base) {
  var z = [];
  var n = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < n || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
}

// Returns a*x, where x is an array of decimal digits and a is an ordinary
// JavaScript number. base is the number base of the array x.
function multiplyByNumber(num, x, base) {
  if (num < 0) return null;
  if (num == 0) return [];

  var result = [];
  var power = x;
  while (true) {
    if (num & 1) {
      result = add(result, power, base);
    }
    num = num >> 1;
    if (num === 0) break;
    power = add(power, power, base);
  }

  return result;
}

function parseToDigitsArray(str, base) {
  var digits = str.split('');
  var ary = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    var n = parseInt(digits[i], base);
    if (isNaN(n)) return null;
    ary.push(n);
  }
  return ary;
}

function convertBase(str, fromBase, toBase) {
  var digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;

  var outArray = [];
  var power = [1];
  for (var i = 0; i < digits.length; i++) {
    // invariant: at this point, fromBase^i = power
    if (digits[i]) {
      outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase);
    }
    power = multiplyByNumber(fromBase, power, toBase);
  }

  var out = '';
  for (var i = outArray.length - 1; i >= 0; i--) {
    out += outArray[i].toString(toBase);
  }
  return out;
}

function decToHex(decStr) {
  var hex = convertBase(decStr, 10, 16);
  return hex ? '0x' + hex : null;
}

function hexToDec(hexStr) {
  if (hexStr.substring(0, 2) === '0x') hexStr = hexStr.substring(2);
  hexStr = hexStr.toLowerCase();
  return convertBase(hexStr, 16, 10);
}







function toHuman(otp){
  var l = 4;
  if(localStorage.letters == 'true'){
    otp = parseInt(otp).toString(32).toUpperCase();
    return [otp.substr(0, l),otp.substr(l, l)].join(' ')
  }else{
    var arr = [];
    for(var i = 0; i < otp.length; i+=4){
      arr.push(otp.substr(i,l));
    }
    return arr.join(' ')
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





saveVault = function(cb){
  log('saving vault ');
  var encrypted_vault = CryptoJS.AES.encrypt(JSON.stringify(Vault), localStorage.encryptionKey).toString();

  $.post("/vaults/"+token(),{
    vault: encrypted_vault,
    public_key: Vault.root[0]
  },function(r){
    log('saved');
    localStorage.vault = encrypted_vault;
    if(cb) cb(r);
  })

}

decryptVault = function(fn){
  try{
    var decrypted = CryptoJS.AES.decrypt(localStorage.vault, localStorage.encryptionKey).toString(CryptoJS.enc.Utf8);

    if(decrypted.length > 0){
      Vault = JSON.parse(decrypted);
    }
  }catch(e){}
}

function logout(){
  localStorage.encryptionKey = null;
  localStorage.clear();
  location.reload();
}

function pair(){
  var my_id = getID(Vault.root[0]);
  var id = $('#truefactor-id').val()
  var name = $('#truefactor-name').val()
  id = id.replace(/ /g,'');

  if(id.length == id_length){
    if(id == my_id){
      alert('You cant pair with your own device');
    }else{
      $.get('/public_keys/'+id,{},function(key){
        if(key.length > 0){
          if(getID(key) == id){
            var sender = getSender(key);


            if(sender != -1){
              alert('This contact already exists as '+Vault.peers[sender][1]);
            }else{
              Vault.peers.push([key, name])
              saveVault(function(r){
                if(r == 'OK'){
                  alert("Contact request sent");
                  push(key,{newPair: true});
                }else{
                  alert(r.status);
                }
              })  
            }
          }else{
            alert("Invalid checksum");
          }
       
        }else{
          alert('Cannot find this ID')
        }

      })
    }
  }else{
    alert("Invalid ID format");
  }
}



function push(receiver, m){
  m.sender = Vault.root[0]; // our own pubkey

  var key = gen(32);
  var message = CryptoJS.AES.encrypt(JSON.stringify(m), key)
  var encrypted_key = btoa(forge.pki.publicKeyFromPem(receiver).encrypt(key));

  $.post('/messages',{
    message: encrypted_key+":"+message,
    receiver: getID(receiver)
  },function(){})
}

function pull(){
  if(token()){
    $.get('/messages',{
      token: token() 
    },function(r){
      if(r.length > 0){
        list = r.split("\n")
        try{
          for(var i =0;i<list.length;i++){
            var message = (list[i].split(':'));
            key = forge.pki.privateKeyFromPem(Vault.root[1]).decrypt(atob(message[0]))
            message = JSON.parse(CryptoJS.AES.decrypt(message[1], key).toString(CryptoJS.enc.Utf8))
            console.log('got ',message);
            process_message(message)
          }
        }catch(e){} 

      }
    })
  }
}

function getSender(pubKey){
  for(var i = 0; i < Vault.peers.length; i++){
    if(Vault.peers[i][0] == pubKey){
      return i;
    }
  }
  return -1;
}


function process_message(r){
  if(r.chat){
    var resp = prompt(r.message+" from "+Vault.peers[getSender(r.sender)][1])
    if(resp.length > 0)
    push(r.sender, {message: resp, chat: true})
  }

  if(r.newPair){
    if(getSender(r.sender) != -1){
      log("Already have this pair")
    }else{
      screen("paired-truefactors");    
      $('#truefactor-id').val(getID(r.sender));
      $('#truefactor-name').focus();
    }
  }

  if(r.addKeys){

    var sender = getSender(r.sender);
    if(sender != -1){

    }else{
      alert("No such sender in contacts. ");
      return false;
    }


    if(!Vault.origins[r.origin]){
      Vault.origins[r.origin] = {};
      Vault.apps[r.origin] = r.app;
    }
    if(Vault.origins[r.origin][r.tfid]){
      alert("Already have credentials for "+r.tfid+" on "+r.origin)
      return false;
    }else{
      if(r.seed[0] && r.seed[1]){

      }else{
        r.seed[r.seed[0] ? 1 : 0] = {to: sender}
      }
      Vault.origins[r.origin][r.tfid] = {seeds: r.seed};
    }
    saveVault(function(){
      if(r.seed.length == 1){
        push(receiver, {
          removeKeys: true,
          origin: r.origin,
          tfid: r.tfid
        })

      }

    });
  
  }

  /*
  if(r.removeKeys){
    if(r.origin == params.origin && r.tfid == params.tfid){
      Vault.origins[r.origin][r.tfid].seeds[1] = null;
      saveVault();
    }
  }
  */

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
      $('#otp0').val(r.signs[0]);
    }else{
      $('#otp1').val(r.signs[1]);
    }
  }


}

function build(){
  var v = Vault;

  $('.container').hide();
  $('.apps-list-screen').show();
  $('#search').focus();

  if(Object.keys(v.origins).length > 0){

    var table = "";    

    for(origin in v.origins){
      if(!v.origins.hasOwnProperty(origin)) continue;
      if(Object.keys(Vault.origins[origin]) == 0) continue; // no accounts left

      //XSS HERE I KNOW
      var app = v.apps[origin];
      if(app.icon){
        var icon = ('<div class="app-icon"><img src="'+app.icon+'" alt=""></div>');
      }else{
        var icon = ('<div class="app-icon"><img src="http://truefactor.io/img/icon_truefactor.svg" alt=""></div>');
      }
      table += '<a>\
          <div '+" onclick=\"return authRequest({origin:'"+origin+"',manual:true,challenge:'login'});\" "+' class="app">\
            '+icon+
            '<h2 class="app-name">'+app.origin_name+'</h2>\
            <p class="app-description">'+origin+'</p>\
          </div>\
        </a>';

    }

    //actually empty
    if(table.length==0){
      $('.index-search').hide();
      $('.noapps').show();
    }
    $('.apps-list-screen>.apps-list').html(table);

  }else{
    $('.index-search').hide();
    $('.noapps').show();

  }

  return false;

}

function registerRequest(params){
  window.params = params;

  screen('register');



  $('.app-name').text(params.origin_name);
  $('.app-description').text(params.origin);
  if(params.icon){
    $('.app-logo').attr('src',params.icon);
    $('.app-logo').show()
  }



  if(params.request_fields){
    var return_fields = [];
    if(params.request_fields.indexOf('username') != -1){
      $('.username').parent().show();
      return_fields.push('username');
      var tfid_type = 'username';
    }
    if(params.request_fields.indexOf('email') != -1){
      $('.email').parent().show();
      return_fields.push('email');
      var tfid_type = 'email';
    }
  }

  if(params.alg == 'password'){
    $('.email-label').html("Identifier: usually email or username");
    //$('.email').show();
    if(Vault.origins[params.origin]){
      $('.existing-pw').show();
      $('#account-pw').unbind().change(function(){
        $('.email').val($(this).val());
        $('.approve').click();
      }).append('<option>Choose an account</option>');
      for(var i in Vault.origins[params.origin]){
        Vault.origins[params.origin][i];
        $('#account-pw').append('<option value="'+i+'">'+i+'</option>');
      }

    }
  }

  $('.approve').unbind().click(function(){
    if(!Vault.origins[params.origin]){
      Vault.origins[params.origin] = {}
    }
    var tfid = $("."+tfid_type).val();

    Vault.apps[params.origin] = {
      origin_name: params.origin_name,
      icon: params.icon
    }



    if(Vault.origins[params.origin][tfid]){
      if(params.alg=='password'){
        var seeds = Vault.origins[params.origin][tfid].seeds;
      }else{
        alert('Such email already exists');
      }
    }else{
      if(params.alg=='password'){
        var seeds = gen(10,true);
      }else{
        var seeds = [gen(16),gen(16)];
      }
    

      Vault.origins[params.origin][tfid] = {
        seeds: seeds,
        alg: params.alg
      }
    }      

    var obj = {
      action: "seeds",
      seeds: seeds,
      custom: {}
    }

    for(var i in return_fields){
      var name = return_fields[i];
      obj.custom[name] = $("."+name).val()
    }

    saveVault(function(){
      if(params.manual){
        alert('The record has been saved');
        build();
      }else{
        opener.postMessage(obj, params.origin)
      }
    });

  })

}




function getReceiver(seeds){
  if(seeds[0] instanceof Object || seeds[1] instanceof Object){
    // in same pair
    var s = seeds[seeds[0] instanceof Object ? 0 : 1].to
    return Vault.peers[s]
  }else{
    return false;
  }
}

function authRequest(params){
  window.params = params;
  screen('auth');


  var notfound = function(){
    opener.postMessage({
      action: "notfound"
    }, params.origin);
  }  

  if(Vault.origins[params.origin]){
    var profiles = Vault.origins[params.origin];
    var all_ids = Object.keys(profiles);
  }else{
    notfound(); 
    return false;
  }

  $('.deny').unbind().click(notfound);


  if(!params.tfid){
    params.tfid = all_ids[all_ids.length-1];
  }else{
    if(all_ids.indexOf(params.tfid) == -1){
      return notfound();
    }
  }


  var app = Vault.apps[params.origin];
  $('.app-name').text(app.origin_name);
  $('.app-description').text(params.origin);
  if(app.icon){
    $('.app-logo').attr('src',app.icon);
    $('.app-logo').show()
  }


  var profile = profiles[params.tfid];


  $('#account').empty();

  for(i in profiles){
    var selected = ''
    if(params.tfid == i){
      var selected='selected'
    }
    var option = $('<option '+selected+'>'+i+'</option>')
    $('#account').append(option);
  }

  $$('account').onchange = function(){
    params.tfid = $(this).val();
    authRequest(params);
  }



  if(profile.alg == 'password'){
    $('#request').parent().hide();

  }

  if(!params.challenge){
    params.challenge = 'login';
  }

  $('#request').val(params.challenge);

  if(params.challenge == 'login' && !params.manual){
    $('#request').parent().hide();
    $('.approve-text').html("Sign In")
  }
  
  if(params.challenge != 'login'){
    var canvas = document.getElementById('canvasid');
    QR("http://truefactor.io/#auth/"+encodeURIComponent(params.origin)+"/"+params.challenge, canvas);
  }



  var seeds = profile.seeds;
  var receiver = getReceiver(seeds)  

  $('.approve').unbind().click(function(){
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
        var tfid = $('#account').val();
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
        alert("Please approve with "+receiver[1]);
      }
    }else{
      console.log('returning to ',receiver);
      push(receiver[0] ,{
        returnSigns: true,
        signs: signs
      })
      $('.approve-text').html("Approved");
    }
    return false;
  })

  if(receiver){
    // in same pair
    if(params.primary){
      log('sent request to '+receiver[1]+'get sigs')
      push(receiver[0], {
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

      $('.two-factor').show()
      $('#peers').empty();

      $('#peers').append('<option>Choose an action</option>')

      // already 2fa
      if(receiver){
        $('#peers').append('<option selected>"'+receiver[1]+'" is second factor</option>');
      }else{
        for(var i = 0;i < Vault.peers.length; i++){
          $('#peers').append('<option value="2fa:'+i+'">Make "'+Vault.peers[i][1]+'" second factor</option>')
          $('#peers').append('<option value="share:'+i+'">Share credentials with "'+Vault.peers[i][1]+'"</option>')
        }

      }

      $('#peers').append('<option value="show">Show credentials in plain text</option>')
      $('#peers').append('<option value="delete">Delete this account</option>')

      if(seeds[0].to || seeds[1].to){
        var i = seeds[0].to ? 1 : 0
        $('#otp'+i).parent().show();
      }else{
        $('#otpmix').parent().show();
      }
      $('.action-buttons').hide();
      //$('#progress-bar').parent().show();
    }else{
      $('.action-buttons').show();

    }
  }


  var update_otp = function(){
    var message_to_sign = params.challenge+":"+getPeriod();
    if(params.signs){
      var verify_signs = params.signs.split(':');
    }

    if(receiver = getReceiver(seeds)){

      var exist = seeds[0] instanceof Object ? 1 : 0;

      if(params.manual){
        $('#otpmix').parent().hide();
        $('#otp'+exist).parent().show();
      }

      var otp = toOTP(hmac(seeds[exist], message_to_sign));

      if(verify_signs && otp == verify_signs[exists]){
        $('.approve-text').html("One of the signatures is valid! Check "+receiver[1])
        $('.approve-text').parent().css('width','calc(100% - 30px)');
        $('.deny').hide();
        clearInterval(window.updater);
      }

      var humanOtp = toHuman(otp);
      if($('#otp'+exist).val() != humanOtp){
        $('#otp'+exist).val(humanOtp);
      }
    }else{
      var concat = toOTP(hmac(seeds[0], message_to_sign)) + toOTP(hmac(seeds[1], message_to_sign));
      if(verify_signs){
        if(concat == verify_signs.join('')){
          $('.approve-text').html("This message is verified");
          $('.approve-text').parent().css('width','calc(100% - 30px)');
          $('.deny').hide();
        }else{
          $('.deny-text').html("This message is invalid");
          $('.deny-text').parent().css('width','calc(100% - 30px)');
          $('.approve').hide();        }
        clearInterval(window.updater);
      }

      s.both = toHuman(toOTP(sha256(concat)));
      if($$('otpmix').value != s.both){
        $$('otpmix').value = s.both;
      }
      if(params.manual){
        $('#otpmix').parent().show();
        $('#otp0info').parent().hide();
        $('#otp1info').parent().hide();        
      }

    }
  }
  if(window.updater){
    clearInterval(window.updater);
  }

  console.log(profile.alg);

  if(profile.alg == 'password'){
    $('#otpmix').val(seeds).parent().show();
  }else{
    window.updater = setInterval(update_otp,1000);
    update_otp();  
  }

  return false;
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
      origin_name: message.origin_name,
      icon: message.icon,
      alg: message.alg,
      tfid: message.tfid,
      seeds: message.seeds,
      request_fields: message.request_fields
    })
  }

}

function generateKey(cb){
  //var keypair = forge.pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});
  forge.pki.rsa.generateKeyPair({bits: 2048, workers: 2}, function(err, keypair) {
    priv = forge.pki.privateKeyToPem(keypair.privateKey);
    pub = forge.pki.publicKeyToPem(keypair.publicKey);
    cb([pub,priv])
  });

}

function getID(key){
  return toOTP(sha256(key.replace(/\s/g,'')), id_length);
}

function token(){
  if(localStorage.encryptionKey){
    return sha256(localStorage.encryptionKey);
  }
  return false;
}

function moveVault(){
  $('#login').val('');
  $('#passphrase').val('');
  $('.sign-in').html("Move vault");
  $('.logo').attr('src','/img/icon_truefactor.svg')
  screen('login-screen')
  return false;
}


function signIn(){
  var login = $('#login').val();
  var passphrase = $('#passphrase').val();

  var errors = '';
  if(login.indexOf('@') == -1){
    errors += 'Email is invalid. '
  }
  if(passphrase.length < 9){
    errors += 'Passphrase is too short. '
  }
  if(errors.length > 0){
    if(!confirm(errors+"Do you want to proceed?")){
      return false;
    }
  }

  var button = $('.sign-in');
  $('.logo').attr('src','box.gif');

  var starred = Array(passphrase.length+1).join('*');
  button.html('Generating key for '+starred);

  scrypt(passphrase, login, 14, 8, 32, 200, function(newKey) {
    button.html('Getting the vault');

    if(localStorage.encryptionKey){
      var move = true;
      var oldKey = localStorage.encryptionKey;
    }else{
      var move = false;
      localStorage.encryptionKey = newKey;
    }
    localStorage.email = login;

    $.post('/vaults/'+sha256(newKey), {},function(r){

      if(r.length > 0){
        if(move){
          alert("Cannot move: this vault already exists");
        }else{
          button.html('Loading existing vault')
          localStorage.vault = r;
          loggedIn();          
        }
      }else{
        if(move){
          localStorage.encryptionKey = newKey;
          saveVault(function(){
            // destroying the old vault
            $.post('/vaults/'+sha256(oldKey)+"?delete=1",{},function(){
              location.reload();
            });
          });
        }else{
          button.html('Generating root keypair');
          
          generateKey(function(key){
            Vault.root = key;
            saveVault(function(){
              loggedIn();
            })
          });

      }

      }
   
    })

  }, "hex");
  return false;
}



function routeHash(hash){
  hash = hash.split('/');
  if(hash[0] == 'pair'){
    screen('paired-truefactors');
    $('#truefactor-id').val(decodeURIComponent(hash[1]));
    $('#truefactor-name').focus();
  }
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
}

function screen(screen){
  $('.container').hide();
  $('.'+screen).show();
  visit(screen);
}

function loggedIn(){
  decryptVault();

  Visibility.every(5000, function () {
    pull();
  });

  $('.login-screen').hide();

  $('.search-input').keyup(function(){ 
    var search = $(this).val().toLowerCase();
    $('.apps-list a').hide()
    $('.app-name,.app-description', '.apps-list').each(function(){
      if(this.innerHTML.toLowerCase().indexOf(search) != -1){
        console.log('found')
        $(this).parent().parent().show()
      }
    })
  })


  $$('request').onkeyup = function(){
    params.challenge = this.value;
    authRequest(params);
  };

  $('.your-id').html('Your ID is <b>'+toHuman(getID(Vault.root[0]))+'</b>');
  var canvas = document.getElementById('canvasid');
  QR("http://truefactor.io/#pair/"+encodeURIComponent(toHuman(getID(Vault.root[0]))), canvas);
  
  $('.paired-truefactors > .apps-list').empty();
  for(var i = 0;i < Vault.peers.length; i++){
    $('.paired-truefactors > .apps-list').append('<a onclick=chat('+i+')>\
        <div class="app">\
          <div class="app-icon"><img src="http://truefactor.io/img/icon_truefactor.svg" alt=""></div>\
          <h2 class="app-name">'+Vault.peers[i][1]+'</h2>\
          <p class="app-description">'+toHuman(getID(Vault.peers[i][0]))+'</p>\
        </div>\
      </a>');
  }
  $('#peers').change(function(){
    var option = $(this).val()
    var profile = Vault.origins[params.origin][params.tfid];

    if(option.length > 0){
      if(option == 'show'){
        alert(JSON.stringify(Vault.origins[params.origin][params.tfid].seeds))
        return false;
      }
      if(option == 'delete'){
        if(confirm("Are you sure you want to delete "+params.tfid)){
          delete(Vault.origins[params.origin][params.tfid])

          //delete the app too
          if(Object.keys(Vault.origins[params.origin]).length == 0){
            delete(Vault.origins[params.origin]);
            delete(Vault.apps[params.origin])
          }

          saveVault();
          build();
          return false;
        }
      }

      option = option.split(':');
    }else{
      return false;
    }
    
    if(option[0]=='2fa'){
      var seeds = [,profile.seeds[1]];

      // we sent the second seed to another device
      Vault.origins[params.origin][params.tfid].seeds[1] = {to: option[1]};
      saveVault();
    }
    if(option[0] == 'share'){
      var seeds = profile.seeds;
    }
    push(Vault.peers[option[1]][0],{
      addKeys: true,
      origin: params.origin,
      tfid: params.tfid,
      seed: seeds,
      app: Vault.apps[params.origin]
    })

    alert('Request sent to "'+Vault.peers[option[1]][1]+'"');
    build();
  })


  $('#notes').val(Vault.notes);
  $('.email').val(localStorage.email); //prefill
  var hash = location.hash.substr(1);

  if(hash.length > 0){
    routeHash(hash);
    location.hash = '';
  }else{
    build();
  }

  if(opener){
    opener.postMessage({action: 'ready'}, '*');
  }

  
  /*
  var element = document.getElementById('progress-bar');

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
  */ 
}


visit = function(s){
  history.pushState(s, '', '')
}

chat = function(pub){
  process_message({chat: true, message: "Start chat with me", sender: Vault.peers[pub][0]})
}

$(function(){

  $('#passphrase').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      signIn();
    }
  });


  $('.sign-in').click(signIn)
  

  if(localStorage.encryptionKey){
    try{
      loggedIn();
    }catch(e){
      if(confirm("Sorry, it seems we broke something. Do you want to log out?")){
        logout();
      }
    }
  }

});


window.onpopstate = function(e){
  console.log(e.state);

  if(localStorage.encryptionKey){
    screen('apps-list-screen');
  }

  //screen('apps-list-screen');
}


