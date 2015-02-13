(function ( $ ) {

	var SCREENS = 15;
	var TIME = 130;
	var EDGE_OFFSET = 5;
	var POINT_SIZE = 10;

 
    $.fn.sectionSlider = function(sections, opts) {
    	var cvs = null;
		var ctx = null;

		var currentX = 0;
		var idle = true;

		var lastSection;

		var handleSectionMove = function(e) {
			moveSection(e.currentTarget);
			$(document).trigger('sectionMove', [e.currentTarget]);
		}

		var moveSection = function(el) {

			var destX = getSectionPosition(el);
			calculateEdges();

			if (idle) {
				currentX = destX;
				animateInitialize();
			} else {

				$(lastSection).removeClass('selected');

				var i = 0;
				var jump = (destX - currentX) / SCREENS;
				var renderLoop = setInterval(function() {
					currentX += jump;
					render();
					i++;

					if (i == SCREENS) { clearInterval(renderLoop); currentX = destX; }
				}, TIME / SCREENS);
			}

			$(el).addClass('selected');
			lastSection = el;
		};


		var render = function(pointHeight) {
			var pointX = currentX - $(cvs).offset().left;

			ctx.fillStyle = '#FFFFFF';
			ctx.clearRect(0, 0, cvs.width, cvs.height);

			ctx.fillStyle = '#000000';

			ctx.beginPath();

			ctx.moveTo(leftEdge - EDGE_OFFSET, 0);

			ctx.lineTo(leftEdge - EDGE_OFFSET, 2);

			if (!idle) {
				ctx.lineTo(pointX - POINT_SIZE / 2, 2);
				ctx.lineTo(pointX, pointHeight || (POINT_SIZE / 2 + 2));
				ctx.lineTo(pointX + POINT_SIZE / 2, 2);
			}

			ctx.lineTo(rightEdge + EDGE_OFFSET, 2);
			ctx.lineTo(rightEdge + EDGE_OFFSET, 0);

			ctx.stroke();

		};

		var animateInitialize = function() {
			var i = 0;
			idle = false;
			var renderLoop = setInterval(function() {
				
				render((POINT_SIZE * (0.5 * i / SCREENS)) + 2);

				if (i == SCREENS) { clearInterval(renderLoop);}
				i += 1;

			}, TIME / SCREENS);
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
        	$sect.click(handleSectionMove);
        }
        cvs = this.get(0);
        ctx = cvs.getContext('2d');

        calculateEdges();
        render();

        if (opts != null && opts.initialSection != null) {
        	moveSection(sections[opts.initialSection]);
        }

    };
 
}( jQuery ));