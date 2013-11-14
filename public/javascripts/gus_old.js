window.onload = function() {
	$("#sect_container")
		.accordion( 
			{ header : "h2", 
			  heightStyle : "content", 
			  collapsible : "true",
			  //animate : "easeOutCubic",
			  animate : 300} 
	);
}