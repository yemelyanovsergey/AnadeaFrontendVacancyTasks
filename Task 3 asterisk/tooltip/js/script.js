// Determine the plugin code
(function($) {
	$.fn.myPlugin = function() {
		$('.hover').mousemove(function(e) {
		var hint = $(this).attr('ht'); // get text from attribute 
		$('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10}); // set coordinates of the tooltip
		$('#hint').show().fadeIn(500).text(hint); // show text of the tooltip
	}).mouseout(function() {
		$('#hint').hide();     // hide it
	});
	}
})(jQuery);

// Call the plugin
$('#hint').myPlugin();