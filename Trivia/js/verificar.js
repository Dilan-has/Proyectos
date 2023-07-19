import { banco_preguntas } from "./preguntas.js";
let puntos = 0
export let opciones = () => {
    let numeropregunta = Math.floor(Math.random() * 4);
    let div_pregunta = document.querySelector('#pregunta')
    let div_respuesta = document.querySelector('#respuesta')
    let contador = document.querySelector('#contador')
    let audioc = new Audio('../src/7600.mp3')
    let audioi = new Audio('../src/incorrect.mp3')
    let preguntas = banco_preguntas[numeropregunta].pregunta
    let respuesta_correcta = banco_preguntas[numeropregunta].respuesta_correcta
    let respuesta_incorrecta1 = banco_preguntas[numeropregunta].respuestas_incorrectas[0]
    let respuesta_incorrecta2 = banco_preguntas[numeropregunta].respuestas_incorrectas[1]
    let respuesta_incorrecta3 = banco_preguntas[numeropregunta].respuestas_incorrectas[2]

    let escribirpreguntas = () => {


        div_pregunta.innerHTML = `${preguntas}`

        let respuestasb = `
         <div class="p-3">
        <button id="botonr1" class="btn btn-primary fixed-size-btn p-1" value=1></button>
        </div>
        <div class="p-3">
        <button id="botonr2" class="btn btn-primary fixed-size-btn p-1" value=2></button>
        </div>
         <div class="p-3">
        <button id="botonr3" class="btn btn-primary fixed-size-btn p-1" value=3></button>
        </div>
        <div class="p-3">
        <button id="botonr4" class="btn btn-primary fixed-size-btn p-1" value=4></button>
        </div>
    `

        div_respuesta.innerHTML = `${respuestasb}`

        let botonr1 = document.querySelector('#botonr1')
        let botonr2 = document.querySelector('#botonr2')
        let botonr3 = document.querySelector('#botonr3')
        let botonr4 = document.querySelector('#botonr4')

        const respuestas = [respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3];

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }



        shuffleArray(respuestas)

        botonr1.innerHTML = respuestas[0];
        botonr2.innerHTML = respuestas[1];
        botonr3.innerHTML = respuestas[2];
        botonr4.innerHTML = respuestas[3];

        const respuestaEncontrada = respuestas.find((respuesta) => respuesta === respuesta_correcta);

        let verificarRespuesta = (respuesta) => {
            if (respuesta.textContent == respuestaEncontrada) {
                console.log('sisoy')
                respuesta.style.backgroundColor = 'green'
                puntos ++
                contador.innerHTML = `puntos: ${puntos}` 
                audioc.play()
            } else {
                respuesta.style.backgroundColor = 'red'
                const botonCorrecto = [botonr1, botonr2, botonr3, botonr4].find(
                    (btn) => btn.textContent === respuesta_correcta
                );
                if (botonCorrecto) {
                    botonCorrecto.style.backgroundColor = 'green';
                }
                audioi.play()

            }

            botonr1.disabled = true;
            botonr2.disabled = true;
            botonr3.disabled = true;
            botonr4.disabled = true;
        }

        botonr1.addEventListener('click', () => verificarRespuesta(botonr1));
        botonr2.addEventListener('click', () => verificarRespuesta(botonr2));
        botonr3.addEventListener('click', () => verificarRespuesta(botonr3));
        botonr4.addEventListener('click', () => verificarRespuesta(botonr4));



    }

    escribirpreguntas()



}

export let siguienteP = () =>{
    let continuar = document.querySelector('#continuar')
    continuar.addEventListener('click', () => opciones());
}