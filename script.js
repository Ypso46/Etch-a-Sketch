document.querySelector('#submitSize').addEventListener('click', (event) => {
    event.preventDefault();
    const gridSizeInput = document.querySelector('#gridSizeInput');
    let gridSize = gridSizeInput.value;
    console.log("1", gridSize);
    createDiv(gridSize);
});

function createDiv(number) {
    console.log(number);

    const container = document.querySelector('.container-grid');


    for (let i = 1; i <= number; i++) {
        console.log("Je suis dans la boucle:", i);
        const content = document.createElement('div');
        content.classList.add('content-div');
        content.setAttribute('id', `div-${i}`);
        container.appendChild(content);
    }       
}


