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