	
	"use strict";

	Widget.initialize({
		title: "EOW Search",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);

		widget.tabs.addTab("Search", eowEl("webview", { 
				src: "https://playground.eneticum.de/search/" 
			})
			.on("dom-ready", function () { this.insertCSS("body, select { background-color: #131313; color: white; }"); }),
			"EOW Search"
		);
		
		widget.tabs.selectTab("Search");
	});
