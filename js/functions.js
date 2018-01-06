jQuery.fn.hiddenFadeIn = function(ms=1000) {
	this[0].style.display="none";
	this.fadeIn(ms);
	this[0].style.visibility="visible"
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

