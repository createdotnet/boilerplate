$(document).ready(function() {

	// Prevent the fist click if touch is primary interation and header breakpoint is major
	if ("ontouchstart" in document.documentElement && get_breakpoint_triggers() == 'major') {

		$(".menu--site.menu--depth-0 > .menu__item--has-sub > .menu__link").one("click", false, function(e){

			e.preventDefault();
		});
	}

});
