function regionEffectInit(){
    var regions = document.getElementsByClassName("region");
    for(var i =0;i<regions.length;i++){
        var region = $(regions[i]);
        region.registerOnEnterScreenEvent(function(ele){
            ele.region_FadeIn(1000);
        },300);
    }
}
jQuery.fn.region_FadeIn =function(ms=1000){
    var $this = $(this);
	$this[0].style.display="none";
	$this[0].style.visibility="visible"
	$this.fadeIn(ms);
}