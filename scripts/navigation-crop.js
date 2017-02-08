
// Site menu cleanup
function hide_site_menu_overflow() {

	var menu = {};

	// Site menu element
	menu.container = document.querySelector('.menu--site.menu--depth-0');
	// Site menu item element
	menu.item = document.querySelectorAll('.menu--site.menu--depth-0 > .menu__item');

	menu.topPosition = menu.container.getBoundingClientRect().top;

	// more menu container
	menu.moreMenu = document.getElementById('js-site-menu-more');
	// more menu list <ul>
	menu.moreMenuList = document.querySelector('#js-site-menu-more > ul');
	// more menu toggle
	menu.moreMenuToggle = document.querySelector('#js-site-menu-more > .dropdown-toggle');

	menu.cropped = false;


	// Reset the menu classes before we get thier position again
	for (var i = 0; i < menu.item.length; i++) {
		menu.item[i].classList.remove('menu__item--hidden')
	}
	menu.moreMenuList.innerHTML = "";
	menu.container.classList.remove('js-menu--loaded');


	// Available site menu width
	menu.containerWidth = menu.container.getBoundingClientRect().width;

	// to increment in the loop
	menu.itemsWidth = 0;

	// console.log(menu);

	// Major breakpoint conditions
	if ( get_breakpoint_triggers() == 'major') {

		// add space for the 'more' item, see the CSS
		document.body.classList.add('menu-is-cropped');

		// Loop throught the menu items widths, adding them up untill they hit the menu.AvailableWidth
		for (var i = 0; i < menu.item.length; i++) {
			var _this = menu.item[i];

			// If adding this menu item takes us over the limit
			if ( _this.getBoundingClientRect().top != menu.topPosition) {
				// show the 'more' menu
				menu.moreMenuToggle.style.display = "block";

				// copy and hide the overflowing items
				for (var j = i; j < menu.item.length; j++) {
					// add to the 'more' dropdown-toggle
					menu.moreMenuList.appendChild(menu.item[j].cloneNode(true));

					// hide this item
					menu.item[j].classList.add('menu__item--hidden');

				}

				menu.cropped = true;

				break;
			}
			else {
				menu.itemsWidth = menu.itemsWidth + _this.getBoundingClientRect().width;
			}

		}

		if (!menu.cropped) {
			// remove the helper class on the body to remove the space created for the 'more' item to sit in
			document.body.classList.remove('menu-is-cropped');
		}
		// Add a loaded class
		menu.container.classList.add('js-menu--loaded');
	}

}


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
