const container = document.querySelector('#contain');

for (i=0; i < 900; i++) {
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

function randomRGB() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let rgbColor = "rgb(" + a + ", " + b + ", " + c + ")";
    return rgbColor;
}

let colorBtn = document.querySelector("#color");
function changeColor() {
    if (colorBtn.textContent === "Color") {
        colorBtn.textContent = "Black and White";
    }
    else if (colorBtn.textContent === "Black and White") {
        colorBtn.textContent = "Color";
    }
}

boxes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        if (colorBtn.textContent === "Black and White") {
            div.style.backgroundColor = randomRGB();
        }

        else if (colorBtn.textContent === "Color") {
            div.style.backgroundColor = "black";
        }
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
                div.style.backgroundColor = randomRGB();
            });
        });
    }
        
    else {
        alert("Please enter a number between 1 and 100")
    }
}

