import { Obtenerjugador } from "./Api.js"

const buscar = document.querySelector('#buscar')
const btnBuscar = document.querySelector('#btnBuscar')

function buscarP(event) {
    let valor = buscar.value
    if (event.key === 'Enter') {
        event.preventDefault()
        Obtenerjugador(valor)
    }

}

export const buscarJugador = () => {

    btnBuscar.addEventListener('click', function () {
        let valor = buscar.value
        Obtenerjugador(valor)
    })

}

buscar.addEventListener('keypress', buscarP)
