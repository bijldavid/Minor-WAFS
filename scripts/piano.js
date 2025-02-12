const nextButtonPuzzle2 = document.querySelector(".piano-base button");
const aboutMe = document.querySelector('.about-me');

const correctSequence = [ "key1", "key3", "key4", "key3", "key3" ];
let userInput = [];

document.querySelectorAll(".key").forEach((key) => {
    key.addEventListener("click", () => {
        userInput.push(key.id);

        if (userInput[userInput.length - 1] !== correctSequence[userInput.length - 1]) {
            userInput = [];
            return
        }

        if  (userInput.length === correctSequence.length) {
            nextButtonPuzzle2.classList.remove("invisible");
        }
    });
});


nextButtonPuzzle2.addEventListener("click", () => {
    puzzle2.classList.add("invisible");
    aboutMe.classList.remove("invisible");
});