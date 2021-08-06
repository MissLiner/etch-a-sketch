const pad = document.querySelector('#container');

for (i=0; i < 256; i++) {
    let box = document.createElement("div");
    box.className = "box";
    pad.appendChild(box);
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
        colorBtn.textContent = "Black";
    }
    else if (colorBtn.textContent === "Black") {
        colorBtn.textContent = "Color";
    }
}

boxes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        if (colorBtn.textContent === "Black") {
            div.style.backgroundColor = randomRGB();
        }

        else if (colorBtn.textContent === "Color") {
            div.style.backgroundColor = "black";
        }
    });
});

function removeAllChildNodes(pad) {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

function newPad() {
    let padSize = prompt("How wide should your new sketch pad be? (up to 100)", "");
    if (padSize > 0 && padSize <101) {
        removeAllChildNodes(pad);
        for (i=0; i < (padSize ** 2); i++) {
            let newBox = document.createElement("div");
            newBox.className = "newBox";
            let newSize = 'repeat('+padSize+', auto)';
            pad.style.gridTemplateColumns = newSize;
            pad.style.gridTemplateRows = newSize;
            pad.appendChild(newBox);
            
            }
        
        let newBoxes = document.querySelectorAll(".newBox");
        newBoxes.forEach((div) => {
            div.addEventListener('mouseover', () => {
                if (colorBtn.textContent === "Black") {
                    div.style.backgroundColor = randomRGB();
                }
        
                else if (colorBtn.textContent === "Color") {
                    div.style.backgroundColor = "black";
                }
            });
        });
    }
        
    else {
        alert("Please enter a number between 1 and 100")
    }
}

