//(function() {

	var TabModel = Backbone.Model.extend({

		defaults: {
			currentTab: 'about',
			tabs: ['about', 'projects', 'resume']
		}

	});

	var AppView = Backbone.View.extend({

		initialize: function() {
			this.listenTo(this.model, 'change:currentTab', this.setTab);
			this.setTab(this.model);
		},

		el: 'body',

		events: {
			'click .section-link' : 'sectionClick'
		},

		sectionClick: function(e) {
			var sect = $(e.currentTarget).attr('id');
			this.model.set('currentTab', sect);
		},

		setTab: function(tab) {
			$('.shown-section').removeClass('shown-section');
			$('#' + tab.get('currentTab') + '-content, #' + tab.get('currentTab')).addClass('shown-section');
		}
	});

	var tabs = new TabModel({currentTab: 'resume'});	
	var appView = new AppView({model: tabs});

//})();