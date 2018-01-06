
function waterflowEffectInit(){
    var waterflows = document.getElementsByClassName("waterflow");
    for(var i =0;i<waterflows.length;i++){
        var $waterflow =  $(waterflows[i]);
        $waterflow.chirdenForeach(function(index,$ele){
            $ele.registerOnEnterScreenEvent(function(elearg){
                elearg.s_FadeIn(3000);
            },-200)
        });
    }
}

jQuery.fn.chirdenForeach = function(method) {
	this.children().each(function(index,ele) {
        var $ele = $(ele);
        method(index,$ele);
	});
};
jQuery.fn.s_FadeIn =function(ms=1000){
    var $this = $(this);
	$this[0].style.display="none";
	$this[0].style.visibility="visible"
	$this.fadeIn(ms);
}