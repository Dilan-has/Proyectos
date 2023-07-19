import { buscarPokemon } from "./api.js";

let buscar = document.querySelector('#buscar')
let buscarB = document.querySelector('#buscarB')

function buscarP(event) {
    let valor = buscar.value
    if (event.key === 'Enter') {
        event.preventDefault()
        buscarPokemon(valor)

    }

}

buscarB.addEventListener('click', function(){
    let valor = buscar.value
    buscarPokemon(valor)
})

buscar.addEventListener('keypress', buscarP)


