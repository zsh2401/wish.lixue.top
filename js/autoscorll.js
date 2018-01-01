/*
autoscorll.js
coding by zsh2401 on 01/01/2018
need
jquery
jquery-mobile
*/
as_check();
as_begin();
function as_begin(){
    console.log("auto scorll init...");
    as_event_init();
    autoscorll_start();
    console.log("auto scorll start");
}
function as_check(){
    if(typeof jQuery =='undefined'){
        alert("jQuery library is not found!");
    }
}
function as_event_init(){
     $(document).on("mousedown",function(){
        autoscorll_stop();
     });
     $(document).on("mouseup",function(){
        autoscorll_start();
     });
     $(document).on("scorllstart",function(){
        autoscorll_stop();
     });
     $(document).on("scorllstop",function(){
        autoscorll_start();
     });
}
var _as_timer;
function autoscorll_start(){
    _as_timer=setInterval("__scorllDown()",25);
}
function autoscorll_stop(){
    clearInterval(_as_timer);
}
function __currentscrollTop(){
    return $(document).scrollTop(); 
}
function __pageHeight(){
    return $(document).height(); 
}
function __scorllDown(){
    var _crt = __currentscrollTop();
    var _height = __pageHeight();
    if(_crt<_height){
        scroll(0,_crt + 1);
    }else{
        autoscorll_stop();
    }
}