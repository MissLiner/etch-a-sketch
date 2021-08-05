const container = document.querySelector('#contain');
//function 

for (i=0; i < 256; i++) {
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

function changeBoxSize() {
    document.getElementById("contain").style.gridTemplateColumns = "padSize, auto";
  }
let padSize;

function newPad() {
    padSize = prompt("How many squares long should your new sketch pad be? (up to 100)", "");
    if (padSize > 0 && padSize <101) {
        removeAllChildNodes(container);
        //let newContainerbody.createElement
        for (i=0; i < (padSize * 2); i++) {
            let newBox = document.createElement("div");
            newBox.className = "newBox";
            newBox.style.border("solid");
            container.appendChild(newBox);


            boxes.forEach((div) => {
                div.addEventListener('mouseover', () => {
                    div.style.backgroundColor = "black";
                });
            });
        }
    }
        
    else {
        alert("Please enter a number between 1 and 100")
    }
}

//function clearBoxes() {
//    newPad();
//}
