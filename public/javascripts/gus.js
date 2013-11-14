(function() {

	var AppView = Backbone.View.extend({

		initialize: function() {
			console.log('init');
		},

		el: '#main',

		events: {
			'click .section-link' : 'swap',
			
		},

		swap: function(e) {
			var sect = $(e.currentTarget).attr('id');
			$('.shown-section').removeClass('shown-section');
			$('#' + sect + '-content, #' + sect).addClass('shown-section');
		}
	});

	var appView = new AppView();

})();