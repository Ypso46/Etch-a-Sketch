var isDown = false;
var draw = true;
var eraser = false;
var color = "red";

document.querySelector('#gridSizeInput').addEventListener('change', async (event) => {
    event.preventDefault();
    const gridSizeInput = document.querySelector('#gridSizeInput');
    let gridSize = gridSizeInput.value;
    await createDiv(gridSize);
    mouseOver(gridSize);
});

async function createDiv(userInput) {
    const containerGrid = document.querySelector('.containerGrid');
    containerGrid.innerHTML= "";
    for (let i = 1; i <= userInput; i++) {
        const divVert = document.createElement('div');
        divVert.classList.add('divVert');
        divVert.setAttribute('id', `divSquare-${i}`);
        divVert.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        containerGrid.appendChild(divVert);
        for (let j = 1; j <= userInput; j++) {
            const divHoriz = document.createElement('div');
            divHoriz.classList.add('divHoriz');
            divHoriz.setAttribute('id', `divSquare-${i}-${j}`);
            divVert.appendChild(divHoriz);
        }
    }
}

function mouseOver(userInput) {
    document.getElementById('draw').addEventListener('click', () => {
        draw = true;
        eraser = false;
        color = "red";
    });
    
    document.getElementById('eraser').addEventListener('click', () => {
        eraser = true;
        color = "white";
        draw = false;
    });

    for (let i = 1; i <= userInput; i++) {
        for (let j = 1; j <= userInput; j++) {
            document.querySelector(`#divSquare-${i}-${j}`).addEventListener('mouseover', () => {
                if (draw && isDown) {
                    document.querySelector(`#divSquare-${i}-${j}`).style.backgroundColor = color;                    
                } else if (eraser && isDown) {
                    document.querySelector(`#divSquare-${i}-${j}`).style.backgroundColor = color;                    
                } else {
                    isDown = false;
                }
            }); 
        }
    }
}

//TODO write a function to reset the drawing
const clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = () => clearGrid()
function clearGrid() {
    containerGrid.innerHTML = '';
}

document.getElementById('containerTest').addEventListener('mousedown', (event) => {
    console.log("Mouse is down");
    isDown = true;
}); 

document.getElementById('containerTest').addEventListener('mouseup', (event) => {
    console.log("Mouse is up");
    isDown = false;
}); 

