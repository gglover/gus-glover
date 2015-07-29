var BG_MANAGER = {

	backgrounds: {},
	current: null,

	load: function(name) {
		var background = BG_MANAGER.backgrounds[name];
		var current = BG_MANAGER.current;
		if (!background) {
			$.getScript('javascripts/backgrounds/' + name + '.js');
		} else {
			if (current) { current.hide(); }
			background.show();
			BG_MANAGER.current = background;
		}
	},

	addModule: function(name, module) {
		BG_MANAGER.backgrounds[name] = module;
		BG_MANAGER.backgrounds[name].initialize();
		BG_MANAGER.load(name);
 	}
};