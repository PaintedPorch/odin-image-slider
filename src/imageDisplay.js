// Create an array of images, since we're using a premade list there is
// No worry about creating images on the fly. The list will consist of 
// image-locations, this will swap out the urls in the image-list. Since
// we need the buttons to work we'll need to find a way to have the functions
// from the other files work with our list and update the slider on each
// outside interaction.

const locationList = [];
let currentIndex = 0; // This should be the currently-displayed index. This
// should be incremented by the button for the right and decremented versa

export function IncrementIndex() {
    if (currentIndex < locationList.length - 1) currentIndex++;
    else currentIndex = 0;
}

export function DecrementIndex() {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = locationList.length-1;
} 
