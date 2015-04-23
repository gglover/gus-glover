BG_MANAGER.addModule('vortex', {

	initialize: function() {},

	$bg: $('#vortex-bg'),
	
	show: function() {
		this.$bg.show();
		//$('#three-d-content').addClass('vortex'); 
		//$(document).off('mousemove');
	},

	hide: function() {
		this.$bg.hide();
		//$('#three-d-content').removeClass('vortex');
	}

});