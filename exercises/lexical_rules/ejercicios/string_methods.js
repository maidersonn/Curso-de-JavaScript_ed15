const lastName = "Lovelace";
let lastNameLength = 0;

//Asigno el valor numerico lastName a lastNameLength
lastNameLength = lastName.length;
console.log(lastNameLength);

//-----------------------------------------------------

const fullName = "Ada Lovelace";
let firstLetterOfLastName = 0;

//Creo dos variables separando nombre y apellido
let arrayDeFullName = fullName.split(" ");
let ada = arrayDeFullName[0];
let lovelace = arrayDeFullName[1];

//Asigna la primera letra del apellido a la variable numerica

firstLetterOfLastName = lovelace.substring (0, 1);

//Asigna la ultima letra del nombre a una nueva variable numerica

let ultimaDelNombre = ada.charAt(ada.length - 1);

//-----------------------------------------------------------

const noun = "perro";
const adjetive = "grande";
const verbo = "corre";
const adverb = "rapido";

let blanks = ""
blanks = "Mi hermana tiene un " + blanks.concat(noun) + " " + blanks.concat(adjetive) + " que " + verbo + " muy " + adverb;






