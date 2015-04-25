var GUS = {

	PROJECTS_PER_ROW: 4,

	initialize: function() {
		var sectionToShow = GUS.parseSection();
		GUS.loadSection(sectionToShow);
		GUS.wireEvents(sectionToShow);
		GUS.renderProjects();
		GUS.setContentBounds();
		GUS.changeBackground('boring');
	},

	wireEvents: function(sectionToShow) {
		$('.section-link').click(GUS.handleSectionChange);
		$(document).on('sectionMove', GUS.handleProjectChange);
		$('.bg-control').click(GUS.handleBackgroundChange);

		$(window).resize(GUS.setContentBounds);

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

	handleBackgroundChange: function(e) {
		GUS.changeBackground($(e.currentTarget).data('bg'));
	},

	setContentBounds: function(e) {
		GUS.bounds = $('#outer-front')[0].getBoundingClientRect();
	},

	contentBounds: null,
	handlePerspectiveChange: function(e){

		var w = $(document).width();
		var h = $(document).height();
		var x = e.pageX;
		var y = e.pageY;

		var bounds = GUS.bounds; //$('#outer-front')[0].getBoundingClientRect();


		/*if (x <= bounds.left) {
			xPerc = 0.5 * (x / bounds.left);
		} else if (x > bounds.left && x <= bounds.right) {
			xPerc = 0.5;
		} else {
			xPerc = 0.5 + (((x - bounds.right) / (w - bounds.right)) * 0.5);
		}

		if (y <= bounds.top) {
			yPerc = 0.5 * (y / bounds.top);
		} else if (y > bounds.top && y <= bounds.bottom) {
			yPerc = 0.5;
		} else {
			yPerc = 0.5 + (((y - bounds.bottom) / (h - bounds.bottom)) * 0.5);
		}

		console.info(y, bounds.top);*/

		var xRotation = Math.floor(50 * (x / (w * 1.0) - 0.5));
		var yRotation = -1.0 * Math.floor(50 * (y / (h * 1.0) - 0.5));

		if ((x > bounds.left) && (x < bounds.right) && (y > bounds.top) && (y < bounds.bottom)) {
			xRotation = yRotation = 0;
		}

		var $box = $('#three-d-content');
		$box.css({transform: 'rotateY(' + xRotation + 'deg) rotateX(' + yRotation + 'deg)' });
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

	changeBackground: function(name) {
		$('.bg-control.selected').removeClass('selected');
		$('.bg-control[data-bg="' + name + '"]').addClass('selected');
		BG_MANAGER.load(name);
	},


	// Project logic

	currentProject: null,

	projects: [
		{ name:        'pokemon-palettes',
		  description: 'a color palette generator based off of pokemon sprites',
		  link:        'http://pokepalettes.com' ,
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











