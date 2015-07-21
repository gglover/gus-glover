var bg = document.getElementsByTagName('header')[0];

var bgList = ["url('images/king_street_banner_small.jpg')",
			  "url('images/ws-bridge.jpg')"];

var bgIndex = Math.floor(Math.random() * bgList.length);

setInterval(function() {
	bg.style.backgroundImage = bgList[bgIndex];
	bgIndex = (bgIndex + 1) % bgList.length;
}, 3000);
