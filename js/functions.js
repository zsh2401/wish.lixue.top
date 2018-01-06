jQuery.fn.typewriter = function(finishedcallback=null) {
	this.each(function(index,ele) {
		var $ele = $(this), str = $ele.html(), progress = 0;
		$ele.html('');
		var timer = setInterval(function() {
			var current = str.substr(progress, 1);
			if (current == '<') {
				progress = str.indexOf('>', progress) + 1;
			} else {
				progress++;
			}
			$ele.html(str.substring(0, progress) + (progress & 1 ? '' : ''));
			if (progress >= str.length) {
				clearInterval(timer);
				if(finishedcallback != null){
					finishedcallback();
				}
			}
		}, 75);
	});
	return this;
};
jQuery.fn.typewriterWithFadeIn = function(ms=1000,finishedcallback=null) {
	this[0].style.display="none";
	this[0].style.visibility="visible"
	this.typewriter(finishedcallback);
	this.fadeIn(1000);
	return this;
};
jQuery.fn.effectFadeIn = function(ms=1000) {
	this[0].style.display="none";
	this[0].style.visibility="visible"
	this.fadeIn(ms);
	return this;
};
function effectFadeIn(eleId,ms=1000){
	var ele = document.getElementById(eleId);
	ele.style.display="none";
	ele.style.visibility="visible"
	$(ele).fadeIn(1000);
}

