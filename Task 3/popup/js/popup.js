// Determine the plugin code
(function($) {
	$.fn.myPlugin = function() {
		// plugin code
		$('.christina').click(function(e) {
		var popUp = $(this); // save our data to variable popUp
		$('#popup').css({'left': e.clientX - 500, 'top': e.clientY - 200}); // set coordinates of the popup window
		$('#popup').show('slow').fadeIn('500'); // show popup window
	}).mouseout(function() {
		$('#popup').hide(); // hide popup window when mouse out
	});
	};
})(jQuery);

// Call the plugin
$('#popup').myPlugin();
