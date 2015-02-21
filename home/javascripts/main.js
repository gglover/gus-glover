var GUS = {

	PROJECTS_PER_ROW: 4,

	initialize: function() {
		var sectionToShow = GUS.parseSection();
		GUS.loadSection(sectionToShow);
		GUS.wireEvents(sectionToShow);
		GUS.renderProjects();
	},

	wireEvents: function(sectionToShow) {
		$('.section-link').click(GUS.handleSectionChange);
		$(document).on('sectionMove', GUS.handleProjectChange);


		var links = $('.section-link');
		var selected = $('.section-link:contains(' + sectionToShow + ')');
		if (selected.length) { 
			selected = selected.get(0); 
		} else {
			selected = links[0];
		}

		$('#main-slider').sectionSlider(links, {initialSection: selected});

	},

	handleSectionChange: function(e) {
		var sect = $(e.currentTarget).text();
		GUS.loadSection(sect);
		history.replaceState({}, "~ ~ ~", sect);
	},

	handleProjectChange: function(e, section) {
		if ($(section).hasClass('project-icon')) {
			GUS.changeProject($(section));
		}
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

		return parser.pathname.replace(/\//g,"") || "about";
	},


	// Project logic

	currentProject: null,

	projects: [
		{ name:        'pokemon-palettes',
		  description: 'a color palette generator based off of pokemon sprites',
		  link:        'projects/pokemon-palettes' ,
		  github:      'https://github.com/gglover/pokemon-palettes' },
		{ name:    'multi-tweet',    
		  description: 'collaborative tweet composer with real-time goodies',
		  link:        'http://twootwith.me',
		  github:      'https://github.com/gglover/multi-tweet' },
		{ name:    'human-tetris',  
		  description: 'html5 implementation of a viral <a href="https://www.youtube.com/watch?v=zL4HSk4MUUw"japanese gameshow</a>',
		  link:        'projects/human-tetris',
		  github:      'https://github.com/gglover/bristol-hack-2015' },
		{ name:    'ear-trainer', 
		  description: 'youtube looper and metronome for learning songs by ear with less hassle',
		  link:        'projects/ear-trainer',
		  github:      'https://github.com/gglover/pokemon-palettes' },
		{ name:    'collab-sequencer',
		  description: 'simple music sequencer and chat for composing together or screwin around',
		  link:        'http://cs.gus-glover.com',
		  github:      'https://github.com/tangmi/collab-sequencer' },
		{ name:    'tower-defense',
		  description: 'tower defense game with an ambiguous setting',
		  link:        'projects/tower-defense',
		  github:      'https://github.com/tangmi/td-multi' }
	],

	templateProject: _.template($('#project-template').text()),
	templateDescription: _.template($('#description-template').text()),

	changeProject: function($proj) {
		var $info = $proj.nextAll('p.project-description').first();
		$info.html(GUS.templateDescription( 
			_.findWhere(GUS.projects, { name: $proj.data('name') })
		));
	},

	renderProjects: function() {
		var $sect = $('#main-projects');
		var row = [];
		var $proj = null;
		for (var i = 0; i < GUS.projects.length; i++) {

			$proj = $(GUS.templateProject(GUS.projects[i]));
			row[i % GUS.PROJECTS_PER_ROW] = $proj;
			$sect.append($proj);

			if (((i + 1) % GUS.PROJECTS_PER_ROW) == 0 || i == GUS.projects.length - 1) {
				var $cvs = $('<canvas width="300" height="10"></canvas><p class="project-description">~ ~ ~</p>');
				$sect.append($cvs);
				$cvs.sectionSlider(_.clone(row), {initialSection: row[0]});
				GUS.changeProject($(row[0]));
				row = [];
			}
		}
	}

}

$(document).ready(GUS.initialize);