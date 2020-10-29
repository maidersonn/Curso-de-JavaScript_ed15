// 1

function (Date) {
    let hora = Date.getHours();
    if (hora > 6 && hora < 12) {
        return "manana";
    } else if (hora > 12 && hora < 22) {
        return "tarde";
    } else {
        return "noche";
    }
}

// 2 

function pideYSuma () {
    const numero = prompt("escribe un numero");
    const n = parseInt(numero);

    let suma = 0;
    for ( let i = 0 ; i < n ; i++) {
        suma += i ; 
    }
    return suma;
}

//3


function pideYMultiplica () {
    const numero = prompt("escribe un numero");
    const n = parseInt(numero);

    let resultado = 1;
    for ( let i = 1 ; i < n ; i++) {
        resultado *= i ; 
    }
    return resultado;
}

// 4


function pideYEligeMUltiplicarOSumar () {
    const numero = prompt("escribe un numero");
    const n = parseInt(numero);
    const eleccion = prompt("que quieres? multiplicar o sumar")

    let resultado1 = 0;
    let resultado2 = 1;
    if ( eleccion === "multiplicar") {
        for ( let i = 1 ; i < n ; i++) {
        resultado2 *= i ; 
        }
        return resultado2;
    } else if (eleccion === "sumar") {
        for ( let i = 0 ; i < n ; i++) {
            resultado1 += i ; 
        }
        return resultado1;
    }   
}

//5 
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let arrayRespuestas = [];
let intentos = 0;

function preguntaNumeroAlUsuario () {
    const respuesta = parseInt(prompt ("averigua un numero del 1 al 100"));
    return respuesta;
}

function comprobarIntento (numero) {
    if (!arrayRespuestas.includes(numero)){
        arrayRespuestas.push(numero);
        intentos ++;
    }  
}
function esElNumero () {

    let respuestaUsuario = preguntaNumeroAlUsuario();

    if (respuestaUsuario > numeroSecreto) {
        alert("Tu respuesta el mayor que el numero a averiguar.");
        comprobarIntento(respuestaUsuario);
        esElNumero();
        
    } else if (respuestaUsuario < numeroSecreto) {
        alert("Tu respuesta el menos que el numero a averiguar.");
        comprobarIntento(respuestaUsuario);
        esElNumero();

    } else {
        alert (`has acertado ! te ha costado ${intentos} intentos`);
    }

}

esElNumero();
     
//6
let year = new Date().getFullYear()
for (let i = year; i <= year + 20; i++) {
    if (i % 4 === 0 || i % 100 === 0) {
        console.log(`El año ${i} es bisiesto`);
    };
}


//7

function elMasLargo (array) {
    let resultado = "";
    for ( i = 0 ; i < array.length ; i ++) {
        if (array[i].length > resultado.length) {
            resultado = array[i];
        }
    }
    return resultado;
}
let arrayDeStrings = ["esto", "es", "un", "array", "de", "strings"];
console.log(elMasLargo(arrayDeStrings));

//8

function arrayPares (array) {
    let respuesta = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            respuesta.push(array[i]);
        }
    }
    return respuesta;
}

const nuevoArray = arrayDeStrings.filter((_, index) => index % 2 === 0);  

//9
/**
 * 
 * ada
 * adafada
 * ociico
 * erre
 * e
 * 
 */
function esPalindromo (palabra) {

}


//10

function concatenar (array1, array2) {
      let array3 = array1.concat(array2);
      return array3;
}
console.log(concatenar(bat,bi))

function concatenarConLoop (array1, array2) {
    
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return array1;
}
console.log(concatenarConLoop(bat,bi));



