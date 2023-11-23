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

export function DisplayCurrentIndex() {
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

var x = 0;
var intervalID = setInterval(function () {
    IncrementIndex();
    DisplayCurrentIndex();
    if (++x === buttonList.length) {
        window.clearInterval(intervalID);
    }
}, 0.000001);

let intervalId = window.setInterval(function(){
    IncrementIndex();
    DisplayCurrentIndex();
}, 5000);

// Create function to click on each button and travel there
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function() {
        for (let i = 0; i < buttonList.length; i++) {
            buttonList[i].style.opacity = .4;
        }
        currentIndex = i;
        DisplayCurrentIndex();
        clearInterval(intervalId);
        buttonList[i].style.opacity = 1;
        intervalId = window.setInterval(function(){
            IncrementIndex();
            DisplayCurrentIndex();
        }, 5000);
    });
}