/*Change the time to change */
var currentNum = 0;
var clockId = "ck"
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

	var strLastDay = "<span class=\"timevalue\">" + day.lenWithZero() + "</span>" + "<span class=\"timeunit\">天</span>";
	var strHours = "<span class=\"timevalue\">" + hrs.lenWithZero() + "</span>"+ "<span class=\"timeunit\">时</span>";
	var strMin = "<span class=\"timevalue\">" + mins.lenWithZero() + "</span>"+ "<span class=\"timeunit\">分</span>";
	var strSec = "<span class=\"timevalue\">" + secs.lenWithZero() + "</span>"+ "<span class=\"timeunit\">秒</span>";

	$("#" + clockId).html(strLastDay + strHours + strMin + strSec);	
}
/*Change the time to change */