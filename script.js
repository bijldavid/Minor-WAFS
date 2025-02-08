const dragElement = document.getElementById("drag-element");
const goal = document.getElementById("drag-goal");
const goalH1 = document.querySelector('#drag-goal h1');
const nextButton = document.querySelector('#drag-goal button');
let collisionCount = 0;
let offsetX
let offsetY
let isDragging = false;
let isColliding = false;
let dragElementHeight = dragElement.getBoundingClientRect().height;
let dragElementWidth = dragElement.getBoundingClientRect().width;


dragElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragElement.style.cursor = "grabbing";

    offsetX = e.clientX - dragElement.getBoundingClientRect().left;
    offsetY = e.clientY - dragElement.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dragElementBounds = dragElement.getBoundingClientRect();
    const goalBounds = goal.getBoundingClientRect();

    function isElementColliding(dragElement, goal) {
        return (
            dragElement.left < goal.right &&
            dragElement.right > goal.left &&
            dragElement.top < goal.bottom &&
            dragElement.bottom > goal.top
        );
    }

    if (isElementColliding(dragElementBounds, goalBounds)) {
        if (!isColliding && collisionCount < 5) {
            isColliding = true;
            collisionCount++;
            goalH1.textContent = `${collisionCount}/5`;
            if (collisionCount === 5) {
                nextButton.style.display = "block";
            }
        }
    } else {
        if (isColliding) {
            isColliding = false;
        }
    }




    // Calculate new position
    let newX = e.clientX - offsetX + (dragElementWidth / 2);
    let newY = e.clientY - offsetY + (dragElementHeight / 2);

    // Apply boundary constraints without modifying the original values
    let boundedX = Math.max(
        0,
        Math.min(window.innerWidth - dragElement.clientWidth, newX)
    );
    let boundedY = Math.max(
        0,
        Math.min(window.innerHeight - dragElement.clientHeight, newY)
    );

    // Use the bounded values
    dragElement.style.left = boundedX + "px";
    dragElement.style.top = boundedY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    dragElement.style.cursor = "grab";
});


