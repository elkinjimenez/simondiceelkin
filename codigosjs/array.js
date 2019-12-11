var elkin ={
    Nombre: 'Elkin',
    Altura: '172'
}

var sacha ={
    Nombre: 'sacha',
    Altura: '180'
}

var omar ={
    Nombre: 'Omar',
    Altura: '173'
}

var personas = [elkin, sacha, omar];

for (var i =0; i<personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.Nombre} mide ${persona.Altura} CM.`)
}