class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    soyAlto() {
        return this.altura >= 180
    }

    saludar(fn) {
        let { nombre, apellido } = this
        console.log(`Hola ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido)
        }
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, esDev) {
        super(nombre, apellido, altura)
        this.esDev = esDev;
    }

    saludar(fn) {
        let { nombre, apellido, esDev } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, esDev)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    if (esDev) {
        console.log(`Buen día, no sabía que eras desarrollador ${nombre}`);
    }
}

var elkin = new Desarrollador('elkin', 'Jimenez', 172, true);
var omar = new Persona('omar', 'Jimenez', 172);
var camila = new Desarrollador('camila', 'Jimenez', 172);

elkin.saludar(responderSaludo);
omar.saludar(responderSaludo);
camila.saludar();