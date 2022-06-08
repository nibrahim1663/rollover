"use strict";

const $ = selector => document.querySelector(selector);

// Search for ALL the image elements in the unordered list that has the id = "image_rollovers"
const imgLink = $("#image_rollovers").querySelectorAll("img");

// Set up a 1 second timer for the rollover images display
let rolledOverImageTimer = 1000;

// Set up a 2 seconds timer for the original images display
let originalImageTimer = 2000;

// Decalare a Global variable 
let link = null;

// This function is called to iterirate over the images source and upadte it
const displayRolledOverImages = () =>
{
    for (link of imgLink) 
    {
        link.src = link.id;
    }
};

// This function is called to update the images source to the original ones
const displayOriginalImages = () =>
{
    document.getElementById("images/deer.jpg").src = "images/fishers.jpg";
    document.getElementById("images/bison.jpg").src = "images/fisherFish.jpg";
};

document.addEventListener("DOMContentLoaded", () => 
{
    // process each img tag
    for (link of imgLink) 
    {
        // Grab the original image's SRC and assign it to originalImage variable
        const originalImage = link.src; 

        // Grab the rolled over image's ID and assign it to rolledOverImage variable
        const rolledOverImage = link.id;

        // preload rollover image
        const image = new Image();
        image.src = rolledOverImage;

        // set up event handlers for hovering an image
        link.addEventListener("mouseover", () => 
        {
            link.src = rolledOverImage;
        });
        link.addEventListener("mouseout", () => 
        {
            link.src = originalImage;
        });
    }

    // Set up a timer that causes the rollover images to be displayed one second after the page is loaded.
    setTimeout(displayRolledOverImages, rolledOverImageTimer);
    
    // Set up another timer that causes the original images to be displayed again two seconds after the page is loaded.
    setTimeout(displayOriginalImages, originalImageTimer);

});