function greetingsEffectInit(){
    var greetings = document.getElementsByClassName("greetings");
    for(var i=0;i<greetings.length;i++){
        $(greetings[i]).registerOnEnterScreenEvent(function(elearg){
            elearg.greetingsTypewriterWithFadeIn();
        });
    }
}
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
jQuery.fn.typewriterWithFadeIn = function(finishedcallback=null,ms=1000) {
    console.log(this.height());
    this[0].style.height = this.height() + "px";
    this[0].style.display="none";
	this[0].style.visibility="visible"
	var result = this.typewriter(finishedcallback);
	this.fadeIn(1000);
	return result;
};