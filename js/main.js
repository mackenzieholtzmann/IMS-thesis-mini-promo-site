//Javascript Document

(function(){
	"use strict";
	console.log("fired");
	
// burger menu functionality

	var button = document.querySelector("#navButton");
	var burger = document.querySelector("#burger");

	function burgerMenu(){
		burger.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", burgerMenu, false);

})();