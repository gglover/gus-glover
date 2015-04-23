BG_MANAGER.addModule('cubes', {

	initialize: function() {},

	$bg: $('#cubes'),
	
	show: function() {

		var rectAppendFn = _.bind(function rectAppend() {
			var rect = {
				x: this.randInt($(window).width(), -100),
				y: this.randInt($(window).height(), -100),
				z: this.randInt(850, -1000),
				depth: this.randInt(300, 30),
				width: this.randInt(300, 30),
				height: this.randInt(300, 30),
				background: '/images/backgrounds/cube' + this.randInt(1, 3) + '.png'
			};

			//Check for content overlap
			if ((rect.z + rect.depth) > 0 && 
				(rect.x + rect.width) > GUS.bounds.left &&
				rect.x < GUS.bounds.right) {
				return rectAppendFn();
			}

			this.$bg.append(this.templateRect(rect));
		}, this);

		for (var i = 0; i < 20; i++) {	
			setTimeout(rectAppendFn, i * 50);
		}

		$(document).mousemove(GUS.handlePerspectiveChange);
		this.$bg.addClass('shown');
	},

	hide: function() {
		this.$bg.html("");
		$(document).off('mousemove');
		$('#three-d-content').css({transform: 'rotateY(0deg) rotateX(0deg)' });
		this.$bg.removeClass('shown');
	},

	randInt: function(hi, lo) {
		return Math.round(((Math.random() * (hi - lo)) + lo));
	},

	templateRect: _.template($('#cube-template').text())
});