
// A function to work out which CSS 'breakpoint' we are in. Enabling media queries in Javascript, sort of.
// Our CSS should be setting a 'content: "[breakpoint name]"' on the #js-navigation-breakpoint-trigger :before element, this javascript gets its value
// See boilerplate/styles/toolkit/_navigation-breakpoint-trigger.scss

function get_breakpoint_triggers() {

	var breakpointTriggerElement = document.querySelector('#js-navigation-breakpoint-trigger');
	breakpointTriggerHeader = window.getComputedStyle(breakpointTriggerElement, ':before' ).getPropertyValue('content').replace(/\"/g, '');

	return breakpointTriggerHeader;
}
