// Convierte la logica para usar estamentos else if

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  if (val < 5) {
    return "Smaller than 5";
  }
  return "Between 5 and 10";
}

testElseIf(7);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// cambia el orden logico par que retorne los estamentos correctos

function ordenMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

ordenMyLogic(7);

function ordenMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

ordenMyLogic(7);

//Escribe una cadena e if/else if para cumplir con las siguientes condiciones

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(7);

//

const names = [
  "hole in one",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go home",
];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  } else if (stroke === par - 1) {
    return names[2];
  } else if (stroke === par) {
    return names[3];
  } else if (stroke === par + 1) {
    return names[4];
  } else if (stroke === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(0, 1);
golfScore(4, 2);
golfScore(3, 2);
golfScore(5, 5);
golfScore(2, 4);
golfScore(1, 5);
