import { DecrementIndex, IncrementIndex, DisplayCurrentIndex } from "./src/imageDisplay.js";
import Incrementer from "./imageDisplay.js";

let forwardsButton = document.querySelector(".forwards");
const backwardsButton = document.querySelector(".backwards");

forwardsButton.addEventListener("click", function() {
    console.log("HI");
    Incrementer();
    DisplayCurrentIndex();
});

backwardsButton.addEventListener("click", function() {
    DecrementIndex();
    DisplayCurrentIndex();
});