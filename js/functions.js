jQuery.fn.typewriter = function() {
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
				// $ele.html(str.substring(0, progress - 1));
				clearInterval(timer);
			}
		}, 75);
	});
	return this;
};

