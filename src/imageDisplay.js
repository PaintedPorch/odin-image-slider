// Create an array of images, since we're using a premade list there is
// No worry about creating images on the fly. The list will consist of 
// image-locations, this will swap out the urls in the image-list. Since
// we need the buttons to work we'll need to find a way to have the functions
// from the other files work with our list and update the slider on each
// outside interaction.

const locationList = [{url: "./assets/images/bach.jpg", alt: "bach-img"}, {url: "./assets/images/beethoven.png", alt: "beethoven-img"}, {url: "./assets/images/brahms.jpg", alt: "brahms-img"}, {url: "./assets/images/satie.jpeg", alt: "satie-img"}, {url: "./assets/images/chopin.jpeg", alt: "chopin-img"}, {url: "./assets/images/listz.jpg", alt: "listz-img"}];
let currentIndex = 0;

// Create Clickable Image-Changes

const forwardsButton = document.querySelector(".forwards");
const backwardsButton = document.querySelector(".backwards");
const image = document.querySelector(".image");

forwardsButton.addEventListener("click", function() {
    IncrementIndex();
    DisplayCurrentIndex();
    clearInterval(intervalId);
    intervalId = window.setInterval(function(){
        IncrementIndex();
        DisplayCurrentIndex();
    }, 5000);
});

backwardsButton.addEventListener("click", function() {
    DecrementIndex();
    DisplayCurrentIndex();
    clearInterval(intervalId);
    intervalId = window.setInterval(function(){
        IncrementIndex();
        DisplayCurrentIndex();
    }, 5000);
});

function IncrementIndex() {
    if (currentIndex < locationList.length - 1) {
        currentIndex++;
        buttonList[currentIndex].style.opacity = 1;
        buttonList[currentIndex-1].style.opacity = .4;
    }
    else {
        currentIndex = 0;
        buttonList[0].style.opacity = 1;
        buttonList[buttonList.length - 1].style.opacity = .4;
    }
}

function DecrementIndex() {
    if (currentIndex > 0) {
        currentIndex--;
        buttonList[currentIndex].style.opacity = 1;
        buttonList[currentIndex+1].style.opacity = .4;
    }
    else {
        currentIndex = locationList.length-1;
        buttonList[buttonList.length-1].style.opacity = 1;
        buttonList[0].style.opacity = .4;
    }
} 

function DisplayCurrentIndex() {
    image.src = locationList[currentIndex].url;
    image.alt = locationList[currentIndex].alt;
}

// Create Auto-Timed Image-Changes

const body = document.querySelector("body");
let buttonNumber = 0;

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonDiv");
buttonDiv.style.width = image.width;

const buttonList = [];

for (let i = 0; i < locationList.length; i++) {
    let button = document.createElement("button");
    button.classList.add(`imageButton${buttonNumber}`, "imageButton");
    buttonList.push(button);
}

for (let i = 0; i < locationList.length; i++) {
    let button = buttonList[i];
    button.number = buttonNumber;
    buttonDiv.appendChild(button);
}

body.appendChild(buttonDiv);

// Create function that auto goes to the next image and highlights active

let intervalId = window.setInterval(function(){
    IncrementIndex();
    DisplayCurrentIndex();
}, 5000);