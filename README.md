# Create.net Boilerplate

## A modular framework for styling the [Create.net](https://www.create.net/) WDK eCommerce platform

We’ve decided to open source the building blocks we use to create the CSS and Javascript front-end of our customer templates. This framework is aimed at our [WDK](http://www.create.net/web_designers_kit.phtml) users and the internal development team at Create who use this to build all templates.

If you find a problem with the code or how it works please [raise issues](https://github.com/createdotnet/boilerplate/issues) against it.

# NOTE: The below is a working draft.

## There are a few ways to use the boilerplate
Depending on your coding experience and on how much of a base you want to start your project with.

### 1. If you are happy using Sass and Gulp/Grunt
- Import the boilerplate into your project with npm/bower/git clone
- Build your own `theme.scss` file and import whichever parts of the boilerplate you wish. Importing 'styles/boilerplate.scss' will include everything.
- At the top of you `theme.scss` file you can overide any of the Sass variables the boilerplate uses.
- Once you have compiled `theme.scss` into CSS, upload it to the WDK editor.

~~**NOTE:** an example of this set up can be seen [here]()~~. Coming Soon

#### Advantages of this method
- You will be able to set variables in your Sass that override the boilerplate defaults and change things like spacing units. Preventing the need to overide styles set in the boilerplate
- You can pick and choose which bits of the boilerplate you wish to include or not. This might be useful if you wish to style something dramatically differently to how the boilerplate does.


### 2. If you just want the base styles
We have a build of the boilerplate CSS that can be included with a WDK tag. Add this tag to your templates `index.html` file and add your own CSS in the WDK editor.

#### Advantages of this method
- You do not need to learn to use tools such as Sass and Gulp or Grunt.
- All the sites base styles are there but no big design decisions have been made, you're free to make those yourself in your CSS and JS

### 3. If you want to tweak an existing template
**NOTE:** Coming Soon

~~We are open-sourcing one of our templates that uses the boilerplate. See [here](www.com).~~

~~Copy these files in to the WDK editor and you will be ready to go live~~

~~Tweak the CSS or add styles to the end.~~

~~**NOTE:** If you find you are overriding a lot of styles from this template or writting a lot of CSS to reset other styles, you may be better off with one of the other methods above.~~
