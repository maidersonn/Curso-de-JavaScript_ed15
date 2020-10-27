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
    
    function preguntaNumeroAlUsuario () {
        const respuesta = parseInt(prompt ("averigua un numero del 1 al 100"));
        return respuesta;
    }
    let respuestaUsuario = preguntaNumeroAlUsuario();
     
    let arrayRespuestas = [];
    arrayRespuestas.push(respuestaUsuario);
    let intentos = 0;

    function comprobarIntento (numero) {
        if (arrayRespuestas.includes(numero)){
            intentos = intentos;
        } else {
            intentos ++;
        }  
    }

    if (respuestaUsuario > numeroSecreto) {
        alert("Tu respuesta el mayor que el numero a averiguar.");
        comprobar(respuestaUsuario);
        respuestaUsuario = preguntaNumeroAlUsuario();
         
    } else if (respuestaUsuario < numeroSecreto) {
        alert("Tu respuesta el menos que el numero a averiguar.");
        comprobar(respuestaUsuario);
        respuestaUsuario = preguntaNumeroAlUsuario();

    } else {
        alert (`has acertado ! te ha costado ${intentos} intentos`);
    }






