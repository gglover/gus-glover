$(document).ready(function() {
	$('.section-link').click(function(e) {

		var section = $(e.currentTarget).attr('id');
		$('#content > div').hide();
		$('#' + section + '-content').show();

		$('.section-link').removeClass('shown-section');
		$(e.currentTarget).addClass('shown-section');
	});

	$('.shown-section').click();	
});