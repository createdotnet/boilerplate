
# Navigation

The navigation module includes base navigation styles and mixins that allow you to choose the layout of the sites navigation.

## Usage

To include the navigation module in your project, import it using `@import "objects/navigation/all"`

### Mixins

There are two layout mixins available, "inline" and "stacked". They can be used within media queries which is useful for providing an inline navigation on large screens and a stacked navigation on smaller screens.

`@include navigation--dropdown--stacked();`

OR

`@include navigation--dropdown--inline();`

## Dependencies

This module required that base variables are set, eg. `$base-spacing-unit` and `$template-option-font-size`