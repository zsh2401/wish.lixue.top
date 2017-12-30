/*Change the time to change */
var currentNum = 0;
var timestampForExam = 1528387200;
function changeTime(){
	var current = new Date();
	var timestampForNow = current.getTime() / 1000;
	var span = timestampForExam - timestampForNow;
	span = Math.round(span);
	var over = span % (3600*24);

	var day = Math.round(span /3600/24);
	var hrs = Math.round(over / 3600);
	var mins = Math.round(over % 3600 / 60);
	var secs = Math.round(over % 60);

	var strLastDay = "<span class=\"digit\">" + day.lenWithZero() + "</span>" + "<span class=\"unit\">天</span>";
	var strHours = "<span class=\"digit\">" + hrs.lenWithZero() + "</span>"+ "<span class=\"unit\">时</span>";
	var strMin = "<span class=\"digit\">" + mins.lenWithZero() + "</span>"+ "<span class=\"unit\">分</span>";
	var strSec = "<span class=\"digit\">" + secs.lenWithZero() + "</span>"+ "<span class=\"unit\">秒</span>";

	$("#lastTimeClock").html(strLastDay + strHours + strMin + strSec);	
}
/*Change the time to change */

/*Text Typing effect*/
Number.prototype.lenWithZero = function() {  
    var strText = this.toString();  
    while (strText.length < 2) {  
        strText = '0' + strText;  
    }  
    return strText;  
};  
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);
/*Text Typing effect*/

/* Image functions */
var images=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg"];
var currentIndex=1;
var maxIndex=images.length; 
function autoSwitch(){
    if(currentIndex >= maxIndex){
        currentIndex = 0;
    }
    setImg("mainimg",images[currentIndex]);
    currentIndex++;
}
function setImg(imgid,imgname=null){
    fileName = "img/" + imgid + ".jpg";
    if(imgname != null){
        fileName = "img/" + imgname;
    }   
    var bigimg = document.getElementById(imgid);
    bigimg.src=fileName;
}
/* Image functions */