"use strict";

const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => 
{
    //const images = document.querySelectorAll("#image_rollovers img");
    const imgLink = $("#image_rollovers").querySelectorAll("img");

    // process each img tag
    for (let link of imgLink) 
    {
        // Grab the original image's SRC and assign it to originalImage variable
        const originalImage = link.src; 

        // Grab the rolled over image's SRC and assign it to rolledOverImage variable
        const rolledOverImage = link.id;

        // preload rollover image
        const image = new Image();
        image.src = rolledOverImage;

        // set up event handlers for hovering an image
        link.addEventListener("mouseover", () => {
            link.src = rolledOverImage;
        });
        link.addEventListener("mouseout", () => {
            link.src = originalImage;
        });
    }
});