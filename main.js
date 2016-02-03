	
	"use strict";

	Widget.initialize({
		title: "Search",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);

		var tabs = eowTabs("div", {}, [{
			name: "Search",
			content: [
				eowEl("webview", { 
					src: "https://playground.eneticum.de/search/" 
				})
				.on("dom-ready", function () { this.insertCSS("body, select { background-color: #131313; color: white; }"); })
			]
		}]);
		
		widget.appendChild(tabs);
		
		tabs.selectTab("Search");
	});
