$(document).ready(function() {

	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: 0 // start at first slide
	};

	$('.pswp_img').click(function(e) {
		e.preventDefault();
		var pswpElement = $('.pswp')[0];
		var gallery = $(this).parents('.pswp_gallery');
		var index = $(this).parent().index();
		options.index = index;
		var items = [];
		$('li', gallery).each(function() {
			var img = $(this).children();
			var size = img.data('size').split('x');
			var slide = {
				src: img.attr('href'),
		        w: size[0],
		        h: size[1],
		        title: $(this).find('.caption').text()
			};
			items.push(slide);
		});
		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	});

	$('#contact-form').submit(function(e) {
		e.preventDefault();

		$(this).find('button[type=submit]').html('<i class="fa fa-circle-o-notch fa-spin"></i> Sending...');

		var url  = $(this).attr('action'),
			data = $(this).serialize();

		$.post(url, data, function() {
			$('#contact-form').fadeOut(400, function() {
				$('#contact-sent').fadeIn(400);
			});
		});

	});

});