import { estadisticasJugador } from "./estadisticas.js"

const api_key = '3603da0f41ea8ff9de623de0c841f6b3e4b3d9d3a3c6a35a7ff37a7e2f55c858'


export let Obtenerjugador = (name) => {
    const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${name}&APIkey=${api_key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let divJugadores = document.querySelector('#jugadores')

            let jugadorSeleccionado = null;

            divJugadores.innerHTML = ''

            data.forEach((element) => {

                let name = element.player_name
                let image = element.player_image
                let team = element.team_name
                let id = element.player_id

                let card = document.createElement('div')
                card.className = 'card'
                card.style.border = 'none'
                card.innerHTML = ` 
                <div class="">
                    <img src="${image}" class="card-img-top" alt="no image">
                    <div class="card-body">
                        <h5 id="nombre-${id}" class="card-title">${name} (${team})    </h5>
                        <a id="seleccionar-${id}" class="btn btn-primary">Estadisticas</a>
                    </div>  
                </div>
                `

                console.log(element)

                let seleccionarBtn = card.querySelector(`#seleccionar-${id}`)
                seleccionarBtn.addEventListener('click', () => {
                    window.open('estadisticas.html')
                    localStorage.setItem('jugadorID', id)


                })

                divJugadores.appendChild(card)

            })

        })

        .catch(error => {
            let divJugadores = document.querySelector('#jugadores')
            console.log('Error:', error)
            divJugadores.innerHTML = '<p>Not found</p>'
        })
}



