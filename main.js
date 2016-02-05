	
	"use strict";

	Widget.INSTANCE.loadPlugin({
		title: "Search",
		name: "Robbilie/eow-search"
	}, plugin => {

		// debugging
		console.log("plugin", plugin);
		
		plugin.getBody().appendChild(eowEl("webview", { 
				src: "https://playground.eneticum.de/search/" 
			})
			.on("dom-ready", function () { this.insertCSS("body, select { background-color: #131313; color: white; }"); })
		);
	});
