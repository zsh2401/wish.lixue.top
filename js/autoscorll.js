/*
autoscorll.js
coding by zsh2401 on 01/01/2018
need
jquery
jquery-mobile
*/
var _as_timer;
as_check();
as_event_init();
autoscorll_start();
function as_check(){
    if(typeof jQuery =='undefined'){
        alert("jQuery library is not found!");
    }
}
function as_event_init(){
    $(document).on("tapon",function(){
        alert("xxxx");
     });
}
function autoscorll_start(){
    _as_timer=setInterval("__scorllDown()",10);
}
function autoscorll_stop(){
    clearInterval(_as_timer);
}
function __scorllDown(){
    var _crt = document.documentElement.scrollTop;
    var _height = document.body.scrollHeight; 
    if(_crt<_height){
        scroll(0,_crt + 1);
    }else{
        autoscorll_stop();
    }
}