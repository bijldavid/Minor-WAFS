const myNameLR = document.querySelector('.my-name');
const myNameUD = document.querySelector('.my-name>div');
const myNameTextWrapper = document.querySelector('.my-name>div div');

const myAgeLR = document.querySelector('.my-age');
const myAgeUD = document.querySelector('.my-age>div');
const myAgeTextWrapper = document.querySelector('.my-age>div div');

const myGoalsLR = document.querySelector('.my-goals');
const myGoalsUD = document.querySelector('.my-goals>div');
const myGoalsTextWrapper = document.querySelector('.my-goals>div div');

const myPictureLR = document.querySelector('.my-picture');
const myPictureUD = document.querySelector('.my-picture>div');
const myPictureTextWrapper = document.querySelector('.my-picture>div div');

const distanceAgeLeft = myAgeUD.getBoundingClientRect().left;
document.documentElement.style.setProperty('--distance', `${distanceAgeLeft}px`);

let isAnimating = {
    myName: false,
    myAge: false,
    myGoals: false,
    myPicture: false
};

myNameLR.addEventListener('click', () => {
    if (isAnimating.myName) {
        myNameLR.style.animation = 'reverse-top-left-x 2s ease-in-out both, reverse-small-to-wide-left 2s linear both';
        myNameUD.style.animation = 'reverse-top-left-y 2s linear both, reverse-small-to-wide-left 2s linear both';
        myNameTextWrapper.style.animation = 'reverse-opacity 1s linear both';
    } else {
        myNameLR.style.animation = 'top-left-x 2s ease-in-out both, small-to-wide-left 2s linear both';
        myNameUD.style.animation = 'top-left-y 2s linear both, small-to-wide-left 2s linear both';
        myNameTextWrapper.style.animation = 'opacity 1s linear 1s both';
    }

    isAnimating.myName = !isAnimating.myName;
});

myAgeLR.addEventListener('click', () => {
    if (isAnimating.myAge) {
        myAgeLR.style.animation = 'reverse-bottom-left-x 2s ease-in-out both, reverse-small-to-wide-left 2s linear both';
        myAgeUD.style.animation = 'reverse-bottom-left-y 2s linear both, reverse-small-to-wide-left 2s linear both';
        myAgeTextWrapper.style.animation = 'reverse-opacity 1s linear both';
    } else {
        myAgeLR.style.animation = 'bottom-left-x 2s ease-in-out both, small-to-wide-left 2s linear both';
        myAgeUD.style.animation = 'bottom-left-y 2s linear both, small-to-wide-left 2s linear both';
        myAgeTextWrapper.style.animation = 'opacity 1s linear 1s both';
    }

    isAnimating.myAge = !isAnimating.myAge;
});

myGoalsLR.addEventListener('click', () => {
    if (isAnimating.myGoals) {
        myGoalsLR.style.animation = 'reverse-bottom-right-x 2s ease-in-out both, reverse-small-to-wide-right 2s linear both';
        myGoalsUD.style.animation = 'reverse-bottom-right-y 2s linear both, reverse-small-to-wide-right 2s linear both';
        myGoalsTextWrapper.style.animation = 'reverse-opacity 1s linear both';
    } else {
        myGoalsLR.style.animation = 'bottom-right-x 2s ease-in-out both, small-to-wide-right 2s linear both';
        myGoalsUD.style.animation = 'bottom-right-y 2s linear both, small-to-wide-right 2s linear both';
        myGoalsTextWrapper.style.animation = 'opacity 1s linear 1s both';
    }

    isAnimating.myGoals = !isAnimating.myGoals;
});

myPictureLR.addEventListener('click', () => {
    if (isAnimating.myPicture) {
        myPictureLR.style.animation = 'reverse-top-right-x 2s ease-in-out both, reverse-small-to-wide-right 2s ease-in-out both';
        myPictureUD.style.animation = 'reverse-top-right-y 2s linear both, reverse-small-to-wide-right 2s ease-in-out both';
        myPictureTextWrapper.style.animation = 'reverse-opacity 1s linear both';
    } else {
        myPictureLR.style.animation = 'top-right-x 2s ease-in-out both, small-to-wide-right 2s ease-in-out both';
        myPictureUD.style.animation = 'top-right-y 2s linear both, small-to-wide-right 2s ease-in-out both';
        myPictureTextWrapper.style.animation = 'opacity 1s linear 1s both';
    }

    isAnimating.myPicture = !isAnimating.myPicture;
});