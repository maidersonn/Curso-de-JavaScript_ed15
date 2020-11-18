//Administrar la lista de puntuacion mas alta de un jugador
// Construir un componenete de puntuaciones mas alta
/* exribe metodos:
    -a;adir puntuacion
    - puntuacion mas alta
    -la ultima agregada
    - las 3 mas altas
    - las puntuaciones en un string que quede bonito
    -el maximo de puntuaciones a agregar son 10
        -si se a;ade una nueva puntuacion, cuando ya hay 10, se borra la mas antigua agregada
    - se puede grabar una puntuacion para conservarla siempre*/

import { nominalTypeHack } from "prop-types";
import React from "react";

class App extends React.Component {
  contructor() {
    super();
    this.state = { userName: "", isScoresVisible: false };
  }

  handleOnContinue = () => {
    this.setState({ isScoresVisible });
  };

  handleOnChangeUserName = (event) => {
    const name = event.target.value;
    this.setState({ userName: name });
  };

  renderScroes() {
    return;
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.userName}</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>;
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={this.handleOnChangeUserName}
            placeholder="Introduce tu nombre"
          />
          <button
            disabled={this.state.userName === ""}
            onClick={this.handleOnContinue}
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }
}


//

const descending = (a, b) => b - a;

class HighScore {
    constructor (scores = []) {
        this.scores = scores;
        this.saved = null;
    }
    addScore (score, save = false) {
        if (typeof score != "number") {
            throw new Error (
                'Parametro invalido, scroe debe ser un numero, mandastes : ${score}'
            );
        }
        
        if (this.scores.length === 10) {
            this.,scores.shift();
        }

        if (save) {
            this.saved = score;
        }

        this.scores.push(score);
   }

   best








}