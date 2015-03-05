BG_MANAGER.addModule('cubes', {

	initialize: function() {},

	$bg: $('#cubes-bg'),
	
	show: function() {
		this.$bg.show();
		var _this = this;
		for (var i = 0; i < 20; i++) {
			debugger;
			$('#three-d-content').append(this.templateRect({
				x: _this.randInt(1000, 0),
				y: _this.randInt(1000, 0),
				z: _this.randInt(1000, -1000),
				depth: _this.randInt(200, 5),
				width: _this.randInt(200, 5),
				height: _this.randInt(200, 5),
				background: '/images/name.png'
			}));
		}
	},

	hide: function() {
		this.$bg.hide();
	},

	randInt: function(hi, lo) {
		return ((Math.random() * hi) + lo);
	},

	templateRect: _.template($('#cube-template').text())
});