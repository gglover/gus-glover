(function ( $ ) {

	var SCREENS = 15;
	var TIME = 100;
	var EDGE_OFFSET = 5;
	var POINT_SIZE = 10;

 
    $.fn.sectionSlider = function(sections) {
    	var cvs = null;
		var ctx = null;

		var currentX = 0;

		var moveSection = function(e) {
			var destX = getSectionPosition(e.currentTarget);

			calculateEdges();
			
			var i = 0;
			var jump = (destX - currentX) / SCREENS;
			var renderLoop = setInterval(function() {
				currentX += jump;
				render();
				i++;

				if (i == SCREENS) { clearInterval(renderLoop); currentX = destX; }
			}, TIME / SCREENS);
		};

		var render = function() {
			var pointX = currentX - $(cvs).offset().left;

			ctx.fillStyle = '#FFFFFF';
			ctx.clearRect(0, 0, cvs.width, cvs.height);

			ctx.fillStyle = '#000000';


			console.log(leftEdge);
			console.log(rightEdge);

			ctx.beginPath();

			ctx.moveTo(leftEdge - EDGE_OFFSET, 0);
			ctx.lineTo(leftEdge - EDGE_OFFSET, 2);

			if (currentX) {
				ctx.lineTo(pointX - POINT_SIZE / 2, 2);
				ctx.lineTo(pointX, POINT_SIZE / 2 + 2);
				ctx.lineTo(pointX + POINT_SIZE / 2, 2);
			}

			ctx.lineTo(rightEdge + EDGE_OFFSET, 2);
			ctx.lineTo(rightEdge + EDGE_OFFSET, 0);

			ctx.stroke();

		};

		var getSectionPosition = function(sect) {
			var $sect = $(sect);
			return ($sect.offset().left + ($sect.width() / 2));
		};

		var leftEdge;
		var rightEdge;

		var calculateEdges = function() {
			leftEdge = cvs.width;
			rightEdge = 0;
			for (var i = 0; i < sections.length; i++) {
				var $sect = $(sections[i]);
				leftEdge = Math.min(leftEdge, $sect.offset().left - $(cvs).offset().left);
	        	rightEdge = Math.max(rightEdge, $sect.offset().left + $sect.width() - $(cvs).offset().left);
	        }
		};

        for (var i = 0; i < sections.length; i++) {
        	var $sect = $(sections[i]);
        	$sect.click(moveSection);
        }
        cvs = this.get(0);
        ctx = cvs.getContext('2d');

        calculateEdges();
        render();

    };
 
}( jQuery ));