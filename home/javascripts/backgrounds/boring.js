BG_MANAGER.addModule('boring', {

	initialize: function() {},

	$bg: $('#boring-bg'),

	show: function() {
		this.$bg.addClass('shown'); 
	},

	hide: function() {
		this.$bg.removeClass('shown');
	}

});