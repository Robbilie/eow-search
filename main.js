	
	"use strict";

	Widget.initialize({
		title: "Search",
		tabs: ["Search"],
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);

		// create search tab
		widget.setTabContent("Search",
			eowEl("webview", { 
				src: "https://playground.eneticum.de/search/" 
			})
			.on("dom-ready", function () { this.insertCSS("body, select { background-color: #131313; color: white; }"); })
		);
	});
