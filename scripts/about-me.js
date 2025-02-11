const leftRight = document.querySelector('.about-me .left-right');
const upDown = document.querySelector('.about-me .up-down');
const whatever = document.querySelector('.up-down>div');

let isAnimating = false; // Toggle state

leftRight.addEventListener('click', () => {
    if (isAnimating) {
        leftRight.style.animation = 'reverse-x 2s ease-in-out both, reverse-small-to-wide 2s linear both';
        upDown.style.animation = 'reverse-y 2s linear both, reverse-small-to-wide 2s linear both';
        whatever.style.animation = 'reverse-opacity 1s linear both';
    } else {
        leftRight.style.animation = 'x 2s ease-in-out both, small-to-wide 2s linear both';
        upDown.style.animation = 'y 2s linear both, small-to-wide 2s linear both';
        whatever.style.animation = 'opacity 2s linear 1s both';
    }

    isAnimating = !isAnimating;
});
