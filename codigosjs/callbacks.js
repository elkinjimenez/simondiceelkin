const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get(lukeURL, opts, function(){
    
})