
// Site menu cleanup
function hide_site_menu_overflow() {

	var
	// Width of site menu navigation item
	$structureItemMenu = $('.site-navigation__item--menu'),
	// Available site menu width
	siteMenuAvailableWidth = $structureItemMenu.outerWidth() - 1,
	// Site menu element
	$headerSiteMenu = $('.menu--site.menu--depth-0'),
	// Site menu width
	siteMenuCurrentWidth = $headerSiteMenu.outerWidth() - 1,
	// Site menu item element
	$headerSiteMenuItem = $('.menu--site.menu--depth-0 > .menu__item'),
	// Site menu threshold width
	splitRowsThreshold = 360,
	// Scope
	menuItemWidth = 0;

	// Reset the menu classes
	$headerSiteMenuItem.removeClass('visuallyhidden');
	$headerSiteMenu.removeClass('js-menu--loaded');

	// Major breakpoint conditions
	if ( get_breakpoint_triggers() == 'major') {
		$headerSiteMenuItem.each(function(){
			if ( menuItemWidth + $(this).outerWidth(true) > siteMenuAvailableWidth) {
				$(this).nextAll($headerSiteMenuItem).andSelf().addClass('visuallyhidden');
				return;
			}
			else {
				menuItemWidth = menuItemWidth + $(this).outerWidth(true);
			}
		});
		if (siteMenuCurrentWidth > splitRowsThreshold) {
			$headerSiteMenu.addClass('js-menu--split-column');
		}
		else {
			$headerSiteMenu.removeClass('js-menu--split-column');
		}
		// Add a loaded class
		$headerSiteMenu.addClass('js-menu--loaded');
	}
}

// On page ready
$(document).ready(function() {

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
