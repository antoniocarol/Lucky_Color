const redBox = document.getElementById('red');
const blueBox = document.getElementById('blue');
const purpleBox = document.getElementById('purple');
const orangeBox = document.getElementById('orange');
const allBoxes = document.querySelectorAll('.box');
const btnSorteio = document.querySelector('.container-random button');
const resultado = document.querySelector('.h2-result')
let corSelecionada = "";

function unselectAllBoxes() {
    corSelecionada = "";
    for (const item of allBoxes) {
        item.classList.remove('selected');
    }
}


redBox.onclick = () => {
    if (!redBox.classList[2]) {
        unselectAllBoxes();
        redBox.classList.toggle('selected');
    } else {
        unselectAllBoxes();
    }
    corSelecionada += "red";
}

blueBox.onclick = () => {
    if (!blueBox.classList[2]) {
        unselectAllBoxes();
        blueBox.classList.toggle('selected');
    } else {
        unselectAllBoxes();
    }
    corSelecionada += "blue";
}

purpleBox.onclick = () => {
    if (!purpleBox.classList[2]) {
        unselectAllBoxes();
        purpleBox.classList.toggle('selected');
    } else {
        unselectAllBoxes();
    }

    corSelecionada += "purple";
}

orangeBox.onclick = () => {
    if (!orangeBox.classList[2]) {
        unselectAllBoxes();
        orangeBox.classList.toggle('selected');
    } else {
        unselectAllBoxes();
    }

    corSelecionada += "orange";
}

const cores = ['red', 'blue', 'green', 'orange'];
btnSorteio.onclick = () => {
    let corSorteada = cores[Math.floor(Math.random() * 4)];
    if (corSorteada == corSelecionada) {
        resultado.textContent = 'Parabéns você acertou!'
    } else if (!corSelecionada) {
        resultado.textContent = 'Selecione uma cor para sortear'
    } else {
        resultado.textContent = 'Tente novamente!'
    }
    unselectAllBoxes();
}