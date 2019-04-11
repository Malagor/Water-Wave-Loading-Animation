document.body.onload = function () {
	var overlay = document.getElementById('overlay'),
		images = document.images,
		images_total_count = images.length,
		images_loaded_count = 0,
		perc_display = document.getElementById('load_perc');

	for (var i = 0; i < images_total_count; i++) {
		var image_clone = new Image();
		image_clone.src = images[i].src;

		image_clone.onload = image_loaded;
		image_clone.onerror = image_loaded;
	}

	function image_loaded() {
		images_loaded_count++;
		perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

		console.log(perc_display.innerHTML);

		if (images_loaded_count >= images_total_count) {
			setTimeout(function () {
				if (!overlay.classList.contains('done')) {
					overlay.classList.add('done');
					setTimeout(function () {
						overlay.style.display = 'none';
					}, 2000);
				}
			}, 1000);
		}
	}
};