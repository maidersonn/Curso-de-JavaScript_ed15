/*Dado el siguiente array:
1- Mapealo a un array de strings: `firstName-lastName: role`
2- Filtra aquellos usuarios con role de `Full Stack Resident`
3- Reduce el array a un objeto en el que cada propiedad es un `role` y su valor un array con los objetos usuarios que tienen dicho `role`
4- Genera una función de búsqueda de un usuario por `firstName` con find.*/

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

//Ejemplo resultado ejercicio 3
const resultado3 = {
  "Full Stack Resident": [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  ],
};

//1
const arrayDeStrings = users.map(
  (user) => `${user.firstName}-${user.lastName}:${user.role}`
);
console.log(arrayDeStrings);

//2
const arFullStack = users.filter((user) => user.role === "Full Stack Resident");
console.log(arFullStack);

//3
const resultado = users.reduce((account, user) => {
  if (account[user.role] == null) {
    account[user.role] = [];
  }
  account[user.role].push({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  return account;
}, {});

console.log(resultado);

//4
function findByName(name, array) {
  return array.find((element) => element.firstName === name);
}
console.log(findByName("Chloe", users));

/*
users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

function isLongName(user) {
  return user.firstName.length > 4;
}

console.log(users.filter(isLongName));

function reducirElementosArray(array, reducir, base) {
  let resultadoAnterior = base;
  for (const element of array) {
    resultadoAnterior = reducir(resultadoAnterior, element);
  }
  return resultadoAnterior;
}

let numeros = [1, 2, 3, 4];

function sumar(numero1, numero2) {
  return numero1 + numero2;
}
console.log(reducirElementosArray(numeros, sumar, 0)); //10)
*/
