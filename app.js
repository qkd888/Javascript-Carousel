/*
-- THE CAROUSEL CHALLENGE --

Write only the JavaScript for the spinning carousel.

1. When a user clicks on the button. The carousel should start rotating slowly clockwise.
2. When the user click on the button while the carousel is turning, it should stop at eactly that position.
3. When the user again clicks the button, the carousel should not reset but continue rotating.
4. The carousel should rotate infinitely.
5. DO NOT TOUCH no CSS or HTML(Juan, leave em' shadows!)

HINT: Everything lies in the State of your app.

WRITE YOUR CODE BELOW

*/
// 1. connect the DOM ELEMENTS with vars
// 2. setup state
// 3. hook events/functions
// 4. execute logic

const carousel = document.querySelector('article'),
    button = document.querySelector('button');

let spinning = false,
    degrees = 0;

setInterval(() => {
    if (spinning) {
        degrees++;
        carousel.style.transform = 'rotate(' + degrees + 'deg)';
    }
}, 10);

button.addEventListener('click', () => {
    spinning = !spinning;
    button.innerHTML = spinning ? 'STOP' : 'START';
});