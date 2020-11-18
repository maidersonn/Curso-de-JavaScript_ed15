class Personaje {
  constructor() {
    this.strength = this.asignacionDeNumero();
    this.dexteriry = this.asignacionDeNumero();
    this.constitution = this.asignacionDeNumero();
    this.intelligence = this.asignacionDeNumero();
    this.wisdom = this.asignacionDeNumero();
    this.charisma = this.asignacionDeNumero();
    this.hitpoint = this.calcularHitpoint(this.constitution);
  }

  asignacionDeNumero() {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
      numeros.push(Math.floor(Math.random() * 6) + 1);
    }
    let min = Math.min(...numeros);
    let indexMinimo = numeros.indexOf(min);
    numeros.splice(indexMinimo, 1);
    return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
  }

  calcularHitpoint(constitution) {
    let modificador = Math.floor((constitution - 10) / 2);
    return 10 + modificador;
  }
}

let personaje = new Personaje();
console.log(personaje);
