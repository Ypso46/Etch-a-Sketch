document.querySelector('#submitSize').addEventListener('click', (event) => {
    event.preventDefault();
    const gridSizeInput = document.querySelector('#gridSizeInput');
    let gridSize = gridSizeInput.value;
    console.log("1", gridSize);
    createDiv(gridSize);
});

function createDiv(userInput) {
    const containerGrid = document.querySelector('.containerGrid');
    containerGrid.innerHTML= "";
    for (let i = 1; i <= userInput; i++) {
        console.log("Je suis dans la boucle:", i);
        const divVert = document.createElement('div');
        divVert.classList.add('divVert');
        divVert.setAttribute('id', `divVert-${i}`);
        //divVert.innerHTML = '<div class="divHoriz"></div>'.repeat(userInput);
        containerGrid.appendChild(divVert);
        for (let j = 1; j <= userInput; j++) {
            const divHoriz = document.createElement('div');
            divHoriz.classList.add('divHoriz');
            divHoriz.setAttribute('id', `divHoriz-${j}`);
            divVert.appendChild(divHoriz);
        }
    }       
}
//TODO effacer l'ancienne grille si autre saisie


