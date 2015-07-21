BG_MANAGER.addModule('ascii', {

	initialize: function() {

		var width = Math.floor($(document).width() / 16) * 2;
		var height = Math.floor($(window).height() / 16);

		var row = new Array(width);
		for (var i = 0; i < height; i++) {
			this.field.push(row.slice());
		}

		var resetFn = _.bind(function() {
			this.fill(this.blockGenerationFn);	
			this.$bg.text(this.getFieldText());
		}, this);

		setInterval(resetFn, 500);
	},

	field: [],
	fill: function(generationFn) {
		for (var i = 0; i < this.field.length; i++) {
			var row = this.field[i];
			for (var j = 0; j < row.length; j++) {
				if (j == row.length - 1) {
					this.field[i][j] = '\n';
				} else {
					this.field[i][j] = generationFn.bind(this)(j, i);
				}
			}
		}
	},

	randomGenerationFn: function() {
		return String.fromCharCode(Math.floor(Math.random() * 50 + 200));
	},

	blockGenerationFn: function() {
		return String.fromCharCode(Math.floor(Math.random() * 15 + 9600));
	},

	count: 0,
	funGenerationFn: function(x, y) {
		this.count++;
		if (Math.floor(x / 5) % 2 == 0 && Math.floor(y / 5) % 2 == 0) {
			return '.';
		}

		if (Math.floor(x / 5) % 2 == 1 && Math.floor(y / 5) % 2 == 1) {
			return '#';
		}

		if (this.count % 2 == 0) { return '~'; }
		else { return '`'; }
	},

	getFieldText: function() {
		debugger;
		return this.field.toString().replace(/\,/g, '');
	},

	show: function() {
		this.$bg.addClass('shown');
		//$('#view').hide();
	},

	hide: function() {
		this.$bg.removeClass('shown');
	},

	move: function(e) {
		var $cell = $(e.currentTarget);

	},

	$bg: $('#ascii-bg'),


});