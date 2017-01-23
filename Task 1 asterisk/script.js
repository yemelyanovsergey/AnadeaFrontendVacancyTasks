(function($) {
	$.fn.mySimplePlugin = function() {
		// Plugin code ...
		var dataInterval = $('time').attr('data-interval'); // get data from attribute and save it 
		$('time').html(dataInterval).text('<time data-interval="2012-08-14T20:03Z,2012-08-15T19:40Z,2012-08-16T19:40Z,2012-08-18T08:15Z">Aug 14 - 18, 4 days</time>'); // past 'Aug 14 - 18, 4 days' into time tags
		return this;
	};
})(jQuery);

// Call plugin
$('time').mySimplePlugin();


