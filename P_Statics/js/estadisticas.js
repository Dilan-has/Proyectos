const api_key = '3603da0f41ea8ff9de623de0c841f6b3e4b3d9d3a3c6a35a7ff37a7e2f55c858'
let jugadorID = localStorage.getItem('jugadorID')

export let estadisticasJugador = (id) => {
    const url = `https://apiv3.apifootball.com/?action=get_players&player_id=${id}&APIkey=${api_key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let divImage = document.querySelector('#imagenJugador')
            let divInfo = document.querySelector('#info')
            let estadisticas = document.querySelector('#estadisticas')
            let titulo = document.querySelector('#titulo')

            let {
                player_age: edad,
                player_assists: asistencias,
                player_birthdate: fechaNacimiento,
                player_blocks: bloqueos,
                player_clearances: despejes,
                player_country: pais,
                player_crosses_total: crucesTotal,
                player_dispossesed: despojado,
                player_dribble_attempts: intentosRegate,
                player_dribble_succ: regatesExitosos,
                player_duels_total: duelosTotal,
                player_duels_won: duelosGanados,
                player_fouls_committed: faltasCometidas,
                player_goals: goles,
                player_goals_conceded: golesConcedidos,
                player_id: idJugador,
                player_image: imagenJugador,
                player_injured: lesionado,
                player_inside_box_saves: salvadasDentroArea,
                player_interceptions: intercepciones,
                player_is_captain: esCapitan,
                player_key: claveJugador,
                player_key_passes: pasesClave,
                player_match_played: partidosJugados,
                player_minutes: minutos,
                player_name: nombreJugador,
                player_number: numeroJugador,
                player_passes: pases,
                player_passes_accuracy: precisionPases,
                player_pen_comm: penComm,
                player_pen_missed: penalesErrados,
                player_pen_scored: penalesConvertidos,
                player_pen_won: penalesGanados,
                player_rating: calificacion,
                player_red_cards: tarjetasRojas,
                player_saves: salvadas,
                player_shots_total: tirosTotal,
                player_substitute_out: sustitucionesSalida,
                player_substitutes_on_bench: sustitucionesBanca,
                player_tackles: entradas,
                player_type: tipoJugador,
                player_woordworks: postes,
                player_yellow_cards: tarjetasAmarillas,
                team_key: claveEquipo,
                team_name: nombreEquipo
            } = data[0]

            titulo.innerHTML= `${nombreJugador}`

            divImage.innerHTML = `
              <img src="${imagenJugador}">
            `

            divInfo.innerHTML = `
            <div class="row">
                <div class="col-10">   
                    <p><strong>Nombre:</strong> ${nombreJugador}</p>  
                    <p><strong>Edad:</strong> ${edad}</p> 
                </div>
                <div class="col-2">
                    <p><strong>Equipo:</strong>${nombreEquipo}</p>
                    <p><strong>Numero:</strong>${numeroJugador}</p>
                </div>
                <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
            </div>
            `

            estadisticas.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th class="text-center" scope="col">PJ</th>
                        <th class="text-center" scope="col">G</th>
                        <th class="text-center" scope="col">A</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                       <td class="text-center">${partidosJugados}</td>
                       <td class="text-center">${goles}</td>
                       <td class="text-center">${asistencias}</td>
                    </tr>   
            </table>
            `

        })

        .catch(error => {
            console.log('Error:', error)
        })
}

estadisticasJugador(jugadorID)


