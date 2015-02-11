var GUS = {

	initialize: function() {
		GUS.wireEvents();
		GUS.loadSection(GUS.parseSection());
		GUS.renderProjects();
	},

	wireEvents: function() {
		$('.section-link').click(GUS.handleSectionChange);
		$('.project-icon').click(GUS.handleProjectIconClick);

		$('#main-slider').sectionSlider($('.section-link'));
	},

	handleSectionChange: function(e) {
		GUS.loadSection($(e.currentTarget).text());
	},

	handleProjectIconClick: function(e) {

	},


	// Section Logic

	sections: [
		{ name:     'about',
		  $el:      $('#about-section'),
		},
		{ name:     'projects',
		  $el:      $('#projects-section'),
		},
		{ name:     'contact',
		  $el:      $('#contact-section'),
		}
	],

	$shownSection: $('#about-section'),

	loadSection: function(name) {
		var sect = _.findWhere(GUS.sections, {name: name});
		if (sect && !(sect.$el == GUS.$shownSection)) {
			GUS.$shownSection.removeClass('shown-section');
			sect.$el.addClass('shown-section');
			GUS.$shownSection = sect.$el;
		}
	},

	parseSection: function() {
		var parser = document.createElement('a');
		parser.href = document.location.href;

		return parser.pathname.replace(/\//g,"");
	},


	// Project logic

	currentProject: null,

	projects: [
		{ name:    'pokemon-palettes' },
		{ name:    'multi-tweet'      },
		{ name:    'collab-sequencer' },
		{ name:    'human-tetris'     },
		{ name:    'ear-trainer'      },
		{ name:    'tower-defense'    },
	],

	templateProject: _.template($('#project-template').text()),

	renderProjects: function() {
		var $sect = $('#projects-section');
		var row = [];
		var $proj = null;
		for (var i = 0; i < GUS.projects.length; i++) {

			$proj = $(GUS.templateProject(GUS.projects[i]));
			row[i % 3] = $proj;
			$sect.append($proj);

			if (((i + 1) % 3) == 0) {
				var $cvs = $('<canvas width="300" height="10"></canvas>');
				$sect.append($cvs);
				$cvs.sectionSlider(_.clone(row));
			}
		}
	}

}

GUS.initialize();