var __eles = [];
var __eles_top = [];
var __eles_func = [];
__init__();
jQuery.fn.setOnThereHandler= function(method){
    var $ele = $(this); 
    __eles[__eles.length] = $ele;
    __eles_top[__eles_top.length] = $ele.top;
    __eles_func[__eles_func.length] = method;
}
function __getElementOffsetTop(ele){
    return ele.offset().top;
}
function __getCurrentScorll(){
    return document.documentElement.scrollTop;
}
function s_setOnThereHandler(ele,method){
    __eles[__eles.length] = ele;
    __eles_top[__eles_top.length] = __getElementOffsetTop(ele);
    __eles_func[__eles_func.length] = method;
}
var timer;

function __init__(){
    timer = setInterval("__onThereCheck()",1000);
}
function __onThereCheck(){
    var _crt = __getCurrentScorll();
    // console.log(_crt);
    for(var i = 0 ;i< __eles.length;i++){
        if(__eles_top[i] < _crt){
            // __eles_func[i]();
        }
    }
}