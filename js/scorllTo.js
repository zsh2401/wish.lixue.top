/* public functions */
function registerScrollTo(eId,handler,offsetValue=300){
    var data = new Object();
    data.ele = $(eId);
    data.top = __stiGetEleTop(data.ele);
    data.handler = handler;
    data.offsetValue = offsetValue;
    _stRecords[_stRecords.length] = data;
}
function registerOnEnterScreenEvent(jqObj,handler,offsetValue=300){
    var data = new Object();
    data.ele = $(jqObj);
    data.top = __stiGetEleTop(data.ele);
    data.handler = handler;
    data.offsetValue = offsetValue;
    _stRecords[_stRecords.length] = data;
}
jQuery.fn.registerOnEnterScreenEvent = function(handler,checkOffsetValue=300) {
    var data = new Object();
    data.ele = $(this);
    data.top = __stiGetEleTop(data.ele);
    data.handler = handler;
    data.offsetValue = checkOffsetValue;
    _stRecords[_stRecords.length] = data;
};
/* public functions */


/* private  */
var _stRecords = [];
var _stCheckInterval = 1000;
__stiInit__();
function __stiInit__(){
    console.log("scorllTo init....");
    setInterval(function(){__stiCheck__();},_stCheckInterval);
}
function __stiGetEleTop(ele){
    var result = ele.offset().top;
    return result;
}
function __stiCurrentScorllTop__(){
    var result = document.documentElement.scrollTop;
    return result == 0 ? document.body.scrollTop:result;
}
function __stiGetScorllBottom(){
    return ($(window).height() + __stiCurrentScorllTop__());
}
function getClientHeight(){   
    var clientHeight=0;   
    if(document.body.clientHeight&&document.documentElement.clientHeight){   
        var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;           
    }else{   
        var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;       
    }   
    return clientHeight;   
}
Array.prototype.__stiremove__ = function(index){
    this.splice(index,1);
}
function __stiCheck__(){
    var crt = __stiGetScorllBottom();
    for(var i = 0;i< _stRecords.length;i++){
        var data = _stRecords[i];
        data.top = __stiGetEleTop(data.ele);
        if(data.top == 0){
            continue;
        }
        
        if(crt >= (data.top - data.offsetValue)){
            _stRecords.__stiremove__(i);
            data.handler(data.ele);
        }
    }
}
/* private  */