

Truefactor = {
  callbacks: {},
  origin: 'http://truefactor.io',
  open: function(callbacks) {

    if(document.domain=='lh' || location.href.indexOf('truefactordebug') != -1) {
      Truefactor.origin = 'http://lh:3000';
    }

    Truefactor.w = window.open(Truefactor.origin); //,'tf',"width=600, height=300");

    Truefactor.callbacks = callbacks;
    
    return false;
  },
  postMessage: function(message){
    Truefactor.w.postMessage(message, Truefactor.origin);
  }
}



window.addEventListener('message', function(e) {
  if (e.origin == Truefactor.origin){
    if(Truefactor.callbacks.hasOwnProperty(e.data.action)) {
      Truefactor.callbacks[e.data.action](e.data);
      delete Truefactor.callbacks[e.data.action]; //clean up
    }
  }
})

//window.addEventListener('DOMContentLoaded', 
//document.onload = function() {
tf_updater = function(){
  var title = document.getElementsByTagName('title')[0];
  if(title){
    Truefactor.origin_name = title.innerText;
    if(Truefactor.origin_name.length>45){
      Truefactor.origin_name = Truefactor.origin_name.substr(0,45)+'...';  
    }
  }


  var icon = document.querySelector('link[rel="icon"]');
  if(icon){
    Truefactor.icon = document.querySelector('link[rel="icon"]').href
  }else{

  }

  var pws=document.querySelectorAll('input');
  var last_sibling = false;
  for(var i = 0;i<pws.length;i++){
    if(pws[i].type == 'text' || pws[i].type == 'email'){
      var last_sibling = pws[i];
    }

    if(pws[i].type == 'password'){
      event = (function(last_sibling){
        return function(){
          var input = this;

          if(last_sibling && last_sibling.type == 'email'){
            request_fields = ['email'];
          }else{
            request_fields = ['username'];
          }
        
          Truefactor.open({
            ready: function(){
              Truefactor.postMessage({
                action: 'register',
                origin_name: Truefactor.origin_name,
                icon: Truefactor.icon,
                alg: 'password',
                request_fields: request_fields
              })
            },
            seeds: function(m){
              Truefactor.w.close();
              console.log(m.seeds, this);
              if(last_sibling) last_sibling.value = m.custom[request_fields[0]];
              clearInterval(tf_updater_int);
              for(var i = 0, ps = document.querySelectorAll('input[type=password]');i<ps.length;i++){
                ps[i].value=m.seeds;
                ps[i].onclick = function(){};
                ps[i].style['background-image'] = '';
              }
            },
            notfound: function(){
              Truefactor.w.close();
              input.style['background-image'] = '';
            }
          })
        }
      })(last_sibling);
      

      pws[i].style['background-image']="url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI2IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4zLjMgKDEyMDgxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX3RydWVmYWN0b3I8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0idHJ1ZWZhY3Rvcl9hcHAtYXV0aCIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2LjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iSGVhZGVyLS8tQmFjayIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbi0vLVRydWVmYWN0b3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1LjAwMDAwMCwgMTUuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fdHJ1ZWZhY3RvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQuNjkyMzA4KSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy4wMDAwMDA4LDAuMzA3NjkyMzA4IEwyNy4wMDAwMDA4LDIuMzA3NjkyMzEgTDI1LjAwMDAwMDgsNC4zMDc2OTIzMSBMMjUuMDAwMDAwOCwyMC4zMTc1OTM0IEwxNC45OTk5OTk5LDIwLjMxNzU5MzQgQzE0LjA5NDgyMSwyMS42NDg5NCAxMi43MTMzNjg3LDIyLjk3MjQwNzUgMTEuNDU1NDQ1NSwyMy44MzI0NDQ4IEwxMS4yMTc4MjE4LDI0LjA3MDA2ODUgQzEwLjY0ODM5OTQsMjQuNDM1NjcxOCA5LjMzMTc1NTk1LDI0LjM5ODkxNTQgOC42MDM5NjA0LDIzLjgzMjQ0NDggTDYuMjI3NzIyNzcsMjEuOTMxNDU0NyBDNS40NDY1MTMzMiwyMS4zMjYyNzIyIDQuMjUwNjg3MSwyMC4xNDA1MjcgMy42MTM4NjEzOSwxOS4zMTc1OTMzIEwxLjQ3NTI0NzUyLDE2LjcwMzczMTkgQzAuOTA4ODM0NTgyLDE1Ljk4Nzg4ODkgMC44NzE4NTg5ODEsMTQuOTE1NTE1NSAxLjIzNzYyMzc2LDE0LjMyNzQ5NDMgTDEuNDc1MjQ3NTIsMTQuMDg5ODcwNSBDMi4zMzg0MjEwNCwxMi44NTQ5OTU3IDQuNDI2Nzk4NDksMTAuOTg0Mjk3NCA1Ljc1MjQ3NTI1LDEwLjA1MDI2NjYgTDUuOTkwMDk5MDEsOS44MTI2NDI4IEM2Ljc3MjY5ODYyLDkuMjc2ODM2NDggNy44NDY4MDExMiw5LjMwNjc4OTA1IDguNjAzOTYwNCw5LjgxMjY0MjggTDEwLjQ5OTk5OTksMTEuODA3NjkyMyBMMjIuMDAwMDAwOCwwLjMwNzY5MjMwOCBMMjcuMDAwMDAwOCwwLjMwNzY5MjMwOCBaIiBpZD0iUmVjdGFuZ2xlLTIiIGZpbGw9IiNERDM2MUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuNDAyNDM5MDIsMTQuNjczNTQ2IEw5LjQwMjQzOTAyLDE5LjMwNzY5MjMgTDUsMTkuMzA3NjkyMyBMNSwwLjMwNzY5MjMwOCBMMjQsMC4zMDc2OTIzMDggTDkuNDAyNDM5MDIsMTQuNjczNTQ2IFoiIGlkPSJSZWN0YW5nbGUtMiIgZmlsbD0iIzQ4OTVEMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4zODM1OTgxNSw5Ljc2ODk0MDg2IEM0LjA5MjQ2MzAyLDEwLjc4ODkxMzUgMi4yNzI5MDUzOCwxMi42MjgyMjQgMS40NjAzMjY5MywxMy45MjI2NDk3IEMwLjgyOTgwMzk4MSwxNC42NTI4MzA5IDAuODYzNTQzMTg4LDE1LjcwNDYzOTIgMS40NjAzMjY5MywxNi40NjEwMjczIEwzLjUzNzM1Mjg3LDE4Ljk5OTQwNDkgQzQuMTMxMTIxNzcsMTkuNzcwMTQ4MyA1LjMwMTA3NjUxLDIwLjkzMDQ0ODcgNi4wNzU5NDAxNCwyMS41Mzc3ODI2IEw4LjM4Mzc0Njc0LDIzLjM4Mzg3NTQgQzkuMTA0MDk3MTgsMjMuOTM1MzE0IDEwLjE2MjMyOTgsMjMuOTY4ODQwNCAxMC45MjIzMzQsMjMuNjE0NjM3IEMxMi4xOTA4ODI5LDIyLjUyODY4MTkgMTQuMDM1NTExOSwyMC43MTEzNjA0IDE1LjA3NjM4NTksMTkuNDYwOTI4MSBMMTUuMzA3MTY2NSwxOC45OTk0MDQ5IEMxNS43MTk1ODU4LDE4LjQxMDgxMTYgMTUuNjkwOTUyMywxNy4zNjYxMDI4IDE1LjA3NjM4NTksMTYuNjkxNzg4OSBMMTMuNDYxNTM4MywxNC44MDc2OTIzIEwxNSwxMy4zMDc2OTIzIEwxNSwxMC4zMDc2OTIzIEwxOCwxMC4zMDc2OTIzIEwxOCw3LjMwNzY5MjMxIEwyMSw3LjMwNzY5MjMxIEwyMSw0LjMwNzY5MjI5IEwyNCw0LjMwNzY5MjI5IEwyNiwyLjMwNzY5MjI5IEwyNywyLjMwNzY5MjI5IEwyNywwLjMwNzY5MjI4OSBMMjIuMjMwNTg3LDAuMzA3NjkyMjg5IEwxMC41LDExLjg0NjE1NCBMOC4xNTI5NjYwOCw5LjUzODE3OTI2IEM3LjQ1MDM5ODI2LDkuMTM1NDI3OTYgNi4zOTcwOTg3Nyw5LjEwODU2MzU0IDUuODQ1MTU5NDgsOS41MzgxNzkyNiBMNS4zODM1OTgxNSw5Ljc2ODk0MDg2IFogTTYuNDYxNTc2NTgsMTYuNzY5MjMwOCBDNS44NDc0MjY2OSwxNy4zMzEwNTUxIDUuODQ3NDI2NjksMTguMjg0MzI5NSA2LjQ2MTU3NjU4LDE4Ljg0NjE1MzggQzcuMDIzNDQ3MzQsMTkuNDYwMjUzIDcuOTc2ODAwNDMsMTkuNDYwMjUzIDguNTM4NjcxMTksMTguODQ2MTUzOCBDOS4xNTI4MjEwOCwxOC4yODQzMjk1IDkuMTUyODIxMDgsMTcuMzMxMDU1MSA4LjUzODY3MTE5LDE2Ljc2OTIzMDggQzcuOTc2ODAwNDMsMTYuMTU1MTMxNiA3LjAyMzQ0NzM0LDE2LjE1NTEzMTYgNi40NjE1NzY1OCwxNi43NjkyMzA4IFoiIGlkPSJSZWN0YW5nbGUtMSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')";
      pws[i].style['background-repeat']="no-repeat";
      //pws[i].style['background-attachment']="fixed";
      pws[i].style['background-position']="50% 50%";
      pws[i].onclick = event;
    }
  }
}






var whitelist = ['truefactor.io'];
if(whitelist.indexOf(document.domain) == -1){
  tf_updater();
  tf_updater_int = setInterval(tf_updater, 1000);  
}

//}

