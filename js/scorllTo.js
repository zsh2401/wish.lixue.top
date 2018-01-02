


function registerScrollTo(ele,handler){
    var height =__stiGetEleTop(ele);
    _stRecordForm[_stRecordForm.length] = height;
    _sth[_sth.length] = handler;
}



var _stRecordForm = [];
var _sth = [];
var _stCheckInterval = 1000;
__stiInit__();
function __stiGetEleTop(ele){
    var result = ele.offset().top;
    console.log(result);
    return result;
}
function __stiInit__(){
    console.log("scorllTo init....");
    setInterval(function(){__stiCheck__();},_stCheckInterval);
}
function __stiCurrentScorllTop__(){
    return document.documentElement.scrollTop;
}
Array.prototype.__stiremove__ = function(index){
    this.splice(index,1);
}
function __stiCheck__(){
    var crt = __stiCurrentScorllTop__();
    for(var i = 0;i< _stRecordForm.length;i++){
        var rValue = _stRecordForm[i];
        if(__stiCurrentScorllTop__() > rValue){
            _stRecordForm.__stiremove__(i);
            var method = _sth[i];
            _sth.__stiremove__(i);
            method();
        }
    }
}