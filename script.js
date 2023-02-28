document.querySelector('#gridSizeInput').addEventListener('change', (event) => {
    event.preventDefault();
    const gridSizeInput = document.querySelector('#gridSizeInput');
    let gridSize = gridSizeInput.value;
    createDiv(gridSize);
});

function createDiv(userInput) {
    const containerGrid = document.querySelector('.containerGrid');
    containerGrid.innerHTML= "";
    for (let i = 1; i <= userInput; i++) {
        const divVert = document.createElement('div');
        divVert.classList.add('divVert');
        divVert.setAttribute('id', `divVert-${i}`);
        divVert.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        containerGrid.appendChild(divVert);
        for (let j = 1; j <= userInput; j++) {
            const divHoriz = document.createElement('div');
            divHoriz.classList.add('divHoriz');
            divHoriz.setAttribute('id', `divHoriz-${j}`);
            divVert.appendChild(divHoriz);
        }
    }       
}



