const container = document.querySelector('#contain');

for (i=0; i < 900; i++) {
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    });
});

function removeAllChildNodes(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newPad() {
    let padSize = prompt("How many squares long should your new sketch pad be? (up to 100)", "");
    if (padSize > 0 && padSize <101) {
        removeAllChildNodes(container);
        for (i=0; i < (padSize ** 2); i++) {
            let newBox = document.createElement("div");
            newBox.className = "newBox";
            let gridTemplateColumns = 'repeat('+padSize+', auto)';
            container.style.gridTemplateColumns = gridTemplateColumns;
            container.style.gridTemplateRows = gridTemplateColumns;
            container.appendChild(newBox);
            
            }
        
        let newBoxes = document.querySelectorAll(".newBox");
        newBoxes.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "black";
            });
        });
    }
        
    else {
        alert("Please enter a number between 1 and 100")
    }
}

