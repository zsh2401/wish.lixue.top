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
function effectFadeIn(eleId,ms=1000){
	var ele = document.getElementById(eleId);
	ele.style.display="none";
	ele.style.visibility="visible"
	$(ele).fadeIn(ms);
}

