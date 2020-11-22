# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Requirements](#requirements)
* [Solutions](#solutions)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


## Requirements

1. Build the navigation menu.
2. Add functionality to distinguish the section in view.
3. Add the functionality to scroll to sections.
4. Hide fixed navigation bar while not scrolling.
5. Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.


## Solutions

1. To build the nav bar menu we started to build the anchor element each having a reference of a section by getting the id of the section element and added each anchor to the li element to make a list of anchors in the ul element.
2. Adding a functionality to distinguish the section in viewport (Window) by using a class which we add to the section which has the biggest portion of the view and this class gives a special shape for this section. Also, we added a function to change the color of the nav bar menu button for the selected section.
3. Scrolling to the mentioned section when clicking the nav bar menu button in a smooth way buy using the scrollTo function which takes the location to be scrolled to and behavior smooth.
4. while not scrolling we used the settimeout function to remove the nav bar menu when not scrolling it waits for 3 seconds then the nav bar menu is hidden till we scroll again but if we are at the top f the page the nav bar menu will always be shown.
5. a Scroll to top button is added which appear when we start to go down the page in a fixed place and when clicked it scrolls the page smoothly to the top.