function pageHeight(){
    return document.body.scrollHeight;  
}
function current(){
    return document.body.scrollTop;   
}
var timer;
timer=setInterval("scorllDown()",10);
function scorllDown(){
    num = current() + 1;
    scroll(0,num);
}