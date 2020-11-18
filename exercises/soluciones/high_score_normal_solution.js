// Administrar la lista de puntuacion mas alta de un jugador

/*
  Debes construir un componente de puntuaciones más altas de un juego:
  
  Escribe metodos que devuelvan
  - añadir puntuacion
  - la puntuacion mas alta
  - la ultima agregada 
  - las 3 más altas
  - las puntuaciones en un string que quede bonito
  - el maximo de puntuaciones a agregar son 10
    - si se añade una nueva puntuación, cuando ya hay 10, se borra la mas antigua agregada
  - se puede grabar una puntuación para conservarla siempre
*/

const descending = (a, b) => b - a;

class HighScore {
  constructor(scores = []) {
    this.scores = scores;
    this.saved = null;
  }
  addScore(score, save = false) {
    if (typeof score !== "number") {
      throw new Error(
        `Parámetro inválido, score debe ser un número, mandastes: ${score}`
      );
    }

    if (this.scores.length === 10) {
      this.scores.shift();
    }

    if (save) {
      this.saved = score;
    }

    this.scores.push(score);
  }
  bestScore() {
    return Math.max(...this.scores);
  }
  bestThreeScores() {
    return [...this.scores].sort(descending).slice(0, 3);
  }
  lastScore() {
    return this.scores[this.scores.length - 1];
  }
  toString() {
    return this.scores.map((score) => `- ${score}`).join("\n");
  }
}
