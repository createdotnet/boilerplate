//
// $(document).ready(function() {
//
// 	var elemWidth,
// 		fitCount,
// 		fixedWidth = 120,
// 	    $menu = $("ul.menu--site"),
// 		$collectedSet;
//
// 	collect();
// 	$(window).resize(collect);
//
// 	function collect() {
// 	    elemWidth = $menu.width();
// 	    fitCount = Math.floor(elemWidth / fixedWidth) - 1;
//
// 		console.log(elemWidth);
// 		console.log(fitCount);
//
// 	    $collectedSet = $menu.children(":gt(" + fitCount + ")");
// 	    $("ul.menu--more").empty().append($collectedSet.clone());
// 	}
// });



// Site menu cleanup
function hide_site_menu_overflow() {

	var menu = {};

	// Site menu element
	menu.container = $('.menu--site.menu--depth-0');
	// Site menu item element
	menu.item = $('.menu--site.menu--depth-0 > .menu__item');

	// get menu top position
	// rounding the number for IE and Edge
	menu.topPosition = menu.container.offset().top;

	// more menu container
	menu.moreMenu = $('#js-site-menu-more');
	// more menu list <ul>
	menu.moreMenuList = $('#js-site-menu-more ul.menu--depth-1');
	// more menu toggle
	menu.moreMenuToggle = $('#js-site-menu-more > .dropdown-toggle');

	menu.cropped = false;


	// Reset the menu classes before we get thier position again
	menu.item.removeClass('menu__item--hidden');
	menu.moreMenuList.empty();
	menu.container.removeClass('js-menu--loaded');
	$('body').removeClass('menu-is-cropped');


	// console.log(menu);

	// Function to hide a set of menu items and replicated them in the 'more menu'
	function moveItems(items){

		// Put them in the 'more menu'
		menu.moreMenuList.empty().append(items.clone());

		// Hide the original
		items.addClass('menu__item--hidden');
	}

	function checkPositions(items){
		var $itemsThatDontFit;
		var menuNeedsCropping;

		items.each(function(){
			var $thisPosition = $( this ).offset().top;
			if ( $thisPosition != menu.topPosition) {
				menuNeedsCropping = true;
			}
		});

		// If something needed cropping, make the 'more' menu item visible and calculate widths again
		if (menuNeedsCropping) {

			$('body').addClass('menu-is-cropped');

			items.each(function(){
				var $thisPosition = $( this ).offset().top;
				if ( $thisPosition != menu.topPosition) {
					$itemsThatDontFit = $( this ).nextAll().andSelf();
					moveItems($itemsThatDontFit);
					return false;
				}
			});

		}

		return $itemsThatDontFit;
	}

	// Major breakpoint conditions
	if ( get_breakpoint_triggers() == 'major') {

		checkPositions(menu.item);

		// Add a loaded class
		menu.container.addClass('js-menu--loaded');
	}

}


// On page ready
$(document).ready(function() {
// $(window).load(function() {

	// Site menu cleanup
	hide_site_menu_overflow();
	$(window).resize(hide_site_menu_overflow);

});
