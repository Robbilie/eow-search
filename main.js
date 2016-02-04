	
	"use strict";

	Widget.initialize({
		title: "Search",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);

		widget.tabs.addTab("Search", eowEl("webview", { 
				src: "https://playground.eneticum.de/search/" 
			})
			.on("dom-ready", function () { this.insertCSS("body, select { background-color: #131313; color: white; }"); })
		);
		
		widget.tabs.selectTab("Search");
	});
