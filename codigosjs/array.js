var elkin = {
    Nombre: 'Elkin',
    Altura: '172'
}

var sacha = {
    Nombre: 'Sacha',
    Altura: '160'
}

var omar = {
    Nombre: 'Omar',
    Altura: '173'
}

const esAlta = persona => persona.Altura > 170

var personas = [elkin, sacha, omar];

var altas = personas.filter(esAlta);

console.log(altas);

