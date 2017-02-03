
// Site menu cleanup
function hide_site_menu_overflow() {
	//
	// var menu = {};
	//
	// // Site menu element
	// menu.container = document.querySelector('.menu--site.menu--depth-0');
	// // Site menu item element
	// menu.item = document.querySelectorAll('.menu--site.menu--depth-0 > .menu__item');
	//
	// // Reset the menu classes before we get thier width
	// for (var i = 0; i < menu.item.length; i++) {
	// 	console.log(menu.item[i].classList);
	// 	menu.item[i].classList.remove('visuallyhidden');
	// 	console.log("after" + menu.item[i].classList);
	// }
	// menu.container.classList.remove('js-menu--loaded');
	//
	//
	// // Available site menu width
	// menu.containerWidth = menu.container.getBoundingClientRect().width;
	//
	// // to increment in the loop
	// menu.itemsWidth = 0;
	//
	// console.log(menu);
	//
	// // Major breakpoint conditions
	// if ( get_breakpoint_triggers() == 'major') {
	//
	// 	// Loop throught the menu items widths, adding them up untill they hit the menu.AvailableWidth
	// 	for (var i = 0; i < menu.item.length; i++) {
	// 		var _this = menu.item[i];
	//
	// 		console.log(menu.itemsWidth + _this.outerWidth + 1);
	//
	// 		// If adding this menu item takes us over the limit
	// 		if ( (menu.itemsWidth + _this.getBoundingClientRect().width + 16) > menu.containerWidth) {
	// 			// hide this item
	// 			_this.classList.add('visuallyhidden');
	// 			// ...and all next items
	// 			for (var j = i; j < menu.item.length; j++) {
	// 				menu.item[j].classList.add('visuallyhidden');
	// 			}
	// 			break;
	// 		}
	// 		else {
	// 			menu.itemsWidth = menu.itemsWidth + _this.getBoundingClientRect().width;
	// 		}
	//
	// 	}
	//
	// 	// Add a loaded class
	// 	menu.container.classList.add('js-menu--loaded');
	// }
}

document.querySelector('.menu--site.menu--depth-0').classList.add('js-menu--loaded');

// On page ready
// $(document).ready(function() {
$(window).load(function() {

	// Site menu cleanup
	hide_site_menu_overflow();


	// De-bounce on resize
	// url: http://stackoverflow.com/questions/1500312/dom-onresize-event
	var timeOut = null;
	window.onresize = function(){

		if(timeOut != null) clearTimeout(timeOut);
		timeOut = setTimeout(hide_site_menu_overflow, 400);
	};
});
