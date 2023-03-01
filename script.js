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
    for (let i = 1; i <= userInput; i++) {
        for (let j = 1; j <= userInput; j++) {
            document.querySelector(`#divSquare-${i}-${j}`).addEventListener('click', () => {
                alert(`#divSquare-${i}-${j}`);
            });
        }
    }
}
