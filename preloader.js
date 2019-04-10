document.body.onload = function () {
	var overlay = document.getElementById('overlay'),
	images = document.images,
	images_total_count = images.length,
	images_loaded_count = 0;	

	for (let i = 0; i < images_total_count.length; i++) {
		var image_clone = new Image();
		image_clone.onload	=	image_loaded();
		image_clone.onerror	= image_loaded();
		image_clone.src			= images[i].src;
	}	
}


function image_loaded(){
	images_loaded_count++;	
}

function preload() {	

setTimeout(function () {		
	if (!overlay.classList.contains('done')) {
		
		overlay.classList.add('done');
		setTimeout(function (){
			overlay.style.display = 'none';
		}, 2000);
	}
}, 1000);
}