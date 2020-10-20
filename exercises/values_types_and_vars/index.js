const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");

convertButton.onclick = () => {
    const text = textArea.value;

    opinion.innerHTML = ""; //sustituir el string vacio por el resultado  
};