const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {

    return new Promise(function (resolve, reject) {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(URL, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })

}

function onError(id) {
    console.log(`Error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {

    var ids = [1, 2, 3, 4];

    var promesas = ids.map(id => obtenerPersonaje(id))

    try {

        var personajes = await Promise.all(promesas)
        console.log(personajes)

    } catch (id) {

        onError(id);

    }

}


obtenerPersonajes();


// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(personaje => {
//         console.log(`Hola, soy ${personaje.name}`)
//         return obtenerPersonaje(7)
//     })
//     .catch(onError)