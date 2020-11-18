function range (from, to) {
    const r = Object.create (range.methods);

    r.from = form;
    r.to = to;
}

range.methods = {
    includes (x) {
        return this.from <= x && x <= this.to;
    },
    toString() {
        return `(${this.from}...${this.to})`;
    },
} ;

const r = range(1, 3);
const r2 = range (2, 4);


// funcion constructora. Empieza por mayuscula

function Range(from, to) {
    this.form = form;
    this.to = to;
}

Range.prototype = {
    includes(x) {
        return this.form <= x && x <= this.to;
    },
    toString() {
        return `(${this.form}...${thsi.to})`;
    },
}

const r3 = new Range (1, 3);
r3.includes(2);

// construyendo coche
/*
function Car (brand) {
    this.brand = brand;
    this.speed = 0;
}

Car.prototype = {
    accelerate: function (amount) {
        this.speed += amount;
    },

    break: function (amount) {
        this.speed -= amount;
    },

    status: function () {
        return `${this.brand} running at ${this.speed} km/h`;
    },
};

const ferrari = new Car ("Ferrari");

ferrari.accelerate(50);
ferrari.break(20);
console.log(ferrari.status());

const ford = new Car ("Ford");

*/

// En javascript 6 
// El guion bajo _ es una convencion para decir que es privado, que no se puede cambiar

class Car {
    constructor (brand, model, topSpeed, color) {
        this.model = model;
        this.brand = brand;
        this._speed = 0;
        this.topSpeed = topSpeed;
        this._color = color;
    }
    accelerate(amount) {
        if (this._speed + amount < this.topSpeed){
         this._speed += amount;
        }
    }
    break(amount) {
        if (this._speed - amount >= 0){
            this._speed -= amount;
        }      
    }


    get status() {
        return `${this.brand} de modelo ${this.model} running at ${this._speed} km/h`;
    }

    get color() {
        return this._color;
    }

    set color(_color) {
        this._color = _color;
    }

    isRunning() {
        return this._speed > 0;
    }

    stop() {
        this.break(this._speed);
        //this.speed = 0;
    }
};
const ford = new Car("Ford", "Mondeo", 150);
console.log(ford.status);

//puedo aceptar el modelo del coche y se muestra en el display del status
//hacer que el metodo frenar no pueda bajar a menos de 0 km/h
//anade un metodo  isRunning que devuelve true o false en base a si la velocidad del coche esta por enciam de 0
//anade metodo que permita parar un coche de inmediato sin parametros
//acepta la velocidad limete de dicho cohe topSpeed, no puedo acelerar por encima de la velocidad maxima



/*Crea una clase TV conlas propiedades: brand, channel y volumen
    - canal debe ser el 1 por defecto
    - volumen debe ser 50 por defecto 
Incluye metodos para subir y bajar el volumen
    -El volumen nunca puede estar por encima de 100 ni por debajo de 0
Incluye un metodo para cambiar el canal
    -la tv solo tiene 50 canales, si intentas cambiar al 60 te quedas ene l que estas
Anade un metodo para restqblecer la TV (canal al 1, volumen al 50)
Incluye un status, que retorna: modelo en el canas x, volumen al x.
*/

class Tv {

    //los metodos estaticos o las propiedades estaticas se crean antes que el constructor
//los defaultValues irian aqui

    constructor (brand, channel, volumen) {
        this._maxChannel = 50;
        this._maxVolume = 100;
        this._minVolume = 0;
        this.brand = brand;
        this._defaultValues = { channel: 1, volume: 50};
        this.channel = 1;
        this.volumen = 50;
    }

    subirVolumen(amount) {
        if (this.volumen + amount > this._maxVolume) {
            this.volumen = this._maxVolume;
        }else {
            this.volumen += amount;
        }
    }

    bajarVolumen(amount) {
        if (this.volumen + amount < this._minVolume) {
            this.volumen = this._minVolume;
        }else {
            this.volumen -= amount;
        }
    }

    change(num) {
        if (num <= this._maxChannel) {
            this.channel = num;
        }
    }

    restablecer() {
        this.channel = this._defaultValues.channel;
        this.volumen = this._defaultValues.volume;
    }

    get status {
        return `${this.brand} en el ${this.channel}, volumen a ${this.volumen}`;
    }    
};

const panasonic = new Tv("Panasonic");



// clase especializada de otra clase. se contruye la clase primera, mas la ampliacion. 
// ejem. c
// class TVenColor extends Tv {}
// Se usa con mesura, cuando hay que hacer mas de una subclase. No hacer mas de dos niveles.
//Ejemplo de esto en 21:38



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

class HighScore {
    constructor () {

    }

    maxScore()
}

