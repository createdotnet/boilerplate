$(document).ready(function() {

	// Nested dropdown sub-menu toggle
	$('.dropdown-toggle').click(function(e) {

		var
		// Clicked item
		dropdownToggle = $(this),
		// Dropdown active class
		dropdownToggleActive = dropdownToggle.hasClass('dropdown-toggle--active');

		// Check to see if the dropdown is nested in another dropdown
		if (! dropdownToggle.parents('.dropdown-item').length == 1) {
			// Remove active class from all dropdowns but clicked instance
			$('.dropdown-toggle').not(dropdownToggle).removeClass('dropdown-toggle--active');
		}

		// Check if the toogle has the active class
		if (dropdownToggleActive) {
			// Remove active class
			dropdownToggle.removeClass('dropdown-toggle--active');
		} else{
			// Add an active class
			dropdownToggle.addClass('dropdown-toggle--active');
		}
	}); // end the .click

});
