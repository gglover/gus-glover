var GUS = {

	initialize: function() {
		GUS.wireEvents();
		GUS.loadSection(GUS.parseSection());
	},

	wireEvents: function() {
		$('.section-link').click(GUS.handleSectionChange);
	},

	handleSectionChange: function(e) {
		GUS.loadSection($(e.currentTarget).text());
	},

	sections: [
		{ name:     'about',
		  $el:      $('#about-section'),
		  selected: true },
		{ name:     'projects',
		  $el:      $('#projects-section'),
		  selected: false },
		{ name:     'contact',
		  $el:      $('#contact-section'),
		  selected: false },
	],

	selectedSection: function() {
		return _.findWhere(GUS.sections, {selected: true});
	},


	loadSection: function(name) {
		var sect = _.findWhere(GUS.sections, {name: name});
		if (sect && !sect.shown) {
			var prevSect = GUS.selectedSection();
			prevSect.$el.removeClass('shown');
			prevSect.selected = false;

			sect.$el.addClass('shown');
			sect.selected = true;
		}
	},

	parseSection: function() {
		var parser = document.createElement('a');
		parser.href = document.location.href;

		return parser.pathname.replace(/\//g,"");
	}

}

GUS.initialize();