/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navName = document.querySelectorAll("section"); // getting all sections in an array


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav bar menu

const navbarList = document.getElementById("navbar__list"); 
const count = navName.length; // getting length for the for loop
const navFrag = document.createDocumentFragment(); // setting a fragment to put data in before adding to dom for taking less time
for (const nav of navName){
    let item = document.createElement("LI");    // created a li element
    let listLink = document.createElement("a"); // created an anchor element 
    let listText = document.createTextNode(nav.getAttribute("data-nav")); // added the text to the anchor
    listLink.appendChild(listText); // adding the text to the to the anchor of the list
    listLink.setAttribute("href","#"+nav.getAttribute("id")); // added the ref to the anchor attribute by getting id attribute
    listLink.setAttribute("class","menu__link"); // added the class in the css for styling 
    item.appendChild(listLink); // adding anchor to li
    navFrag.appendChild(item); // adding li to fragment
}
navbarList.appendChild(navFrag); // added the whole list to the to the ul in the DOM

const links = document.querySelectorAll("#navbar__list  a"); // get all link elements



// Add class 'active' to section when near top of viewport

function changeColor(lookFor) { // function for changing color of nav bar button
    for (const myLink of links){
        let myRef = myLink.getAttribute("href");
         if (("#"+lookFor)===(myRef)){ // get the section and relate it to anchor
            myLink.parentElement.style.backgroundColor = "red"; // change the butto color if active
         }else{
            myLink.parentElement.style.backgroundColor = "white";// reset button color if not active
         }       
    }
}

document.addEventListener("scroll", function(){
    let frameHeightMin = window.innerHeight/(-4); // setting the upper limit for the section to be in viewport
    let frameHeightMax = window.innerHeight/(2); // setting the lower part for the section to be in viewport 
    for (const section of navName){
            let result = section.getBoundingClientRect(); // get the position of the section 
            if ((result.top >= frameHeightMin) && (result.top <= frameHeightMax)){ //  check if section in viewport
                section.classList.add("your-active-class"); // if yes add the class
                let myID = section.getAttribute("id"); // getting the id to send to function
                changeColor(myID); // calling the function
            }else {
                section.classList.remove("your-active-class"); // if no remove the class to be removed from previous section in viewport
            }    
        }
});



// Scroll to anchor ID using scrollTO event
for (const link of links) {
    link.addEventListener("click", function (event) { // adding event listner to the anchors
        event.preventDefault(); // to prevent the default of clicking on the anchor
        let ref = link.getAttribute("href");// taking the id to use it to point of position of scrolling
        let offsetTop = document.querySelector(ref).offsetTop; // The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element which is main
      
        scrollTo({
          top: offsetTop, // setting the place to scroll too
          behavior: "smooth" // smooth that is our objective
        });
    }); 
}
  



// Hide fixed navigation bar while not scrolling 
let timerFlag; // var for the set time out fn
let navPos = document.querySelector(".page__header"); // getting the navbar by class name 
document.addEventListener("scroll", function(){
    clearTimeout(timerFlag); // clear the time amount if there is a scroll again 
    navPos.style.top = "0px"; // to show the nav bar if we r scrolling
    if (window.pageYOffset !== 0){
        timerFlag = setTimeout(function(){
            navPos.style.top = "-60px"; // if we stopped scrolling for 3 sec it dissappear 
        },
        3000);
    }
});

// Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
let btn = document.createElement("button"); // creating a button
let btnText = document.createTextNode("TOP " + "\u21E7"); // setting text for the button
btn.appendChild(btnText); // adding text to button element
btn.style.cssText = "display: none; position: fixed; bottom: 20px; right: 30px; z-index: 2; font-size: 18px; background-color: green; color: white; padding: 15px;" // setting the button css style 
document.body.appendChild(btn); // adding btn elem to the body element but position fixed so it is always visible in viewport
document.addEventListener("scroll", function(){
    if((window.pageYOffset >=  0) && (window.pageYOffset<= 100)){
        btn.style.display = "none"; // to hide btn if we are still at the top of page
    }
    else{
        btn.style.display = "block";// show btn when we go down
    }
});
btn.addEventListener("click",function(){
    scrollTo({
        top: 0, // setting the place to scroll to top
        behavior: "smooth" // smooth that is our objective
      });
}); 








/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


