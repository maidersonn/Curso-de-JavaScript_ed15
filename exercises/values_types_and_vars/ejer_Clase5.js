//2 booleanas
let verdad = true;
let mentira = false;

//2 mutables y 2 inmutables
let mutable1 = [1,2,3];
let mutable2 ={ name: "Maider", apellido: "Landaribar"};
const inmutable1 = "soy un string inmutable";
const inmutable2 = 345;

//comparando con undefined
inmutable2 == undefined;

//comparando con null
inmutable2 == null;

//6 variables de dif tipos y comparar entre si

let mentira = false;
let mutable1 = [1,2,3];
let mutable2 ={ name: "Maider", apellido: "Landaribar"};
const inmutable1 = "soy un string inmutable";
const inmutable2 = 0;
const var6 = -0;

inmutable1 !== inmutable2;
inmutable2 === inmutable1;
mentira !== mutable1;
mutable1 !== mutable2;

//dos arrays. uno de los elementos debe ser expresion

let array1 = [1,2,inmutable2];
let array2 = [true, mentira];

//Introduce en el objeto global un objeto cuya unica propiedad sea una variable 
globalThis.myObj = { x : 1};
globalThis["myObj2"] = { y : 2};

//dos objetos. 1 propiedad al menos expresion

let objeto1 = {
    age : 1 + 3,
}
let objeto2 = {
    name : mutable2.name,
}

//accediendo a los arrays y objetos
objeto2.name;
objeto2["name"];

//