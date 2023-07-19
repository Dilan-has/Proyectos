let div_nombre = document.querySelector('#nombre')
let div_image = document.querySelector('#imagen')
let div_tipo = document.querySelector('#tipo')
let div_stats = document.querySelector('#stats')

export let buscarPokemon = (pokemonName) => {

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => {
    console.log('Respuesta JSON completa:', data);

    let pokemonImageURL = data.sprites.front_default;
    let nombrePokemon = data.name
    let habilidades = data.abilities[1].ability.name
    let tipo = data.types[0].type.name
    let vida = data.stats[0].base_stat
    let ataque = data.stats[1].base_stat
    let defensa = data.stats[2].base_stat
    let ataqueSpecial = data.stats[3].base_stat
    let velocidad = data.stats[5].base_stat

    div_nombre.innerHTML = `<p class="fw-bold fs-3">${nombrePokemon}</p>`
    div_image.innerHTML = `<div class="col"><img src="${pokemonImageURL}" class="img-thumbnail" alt="..."></div> `
    div_tipo.innerHTML = `<p class="fw-bold fs-3">${tipo}</p>`
    div_stats.innerHTML = `
    <table class="table shadow-lg">
    <thead>
      <tr>
        <th scope="col">Vida</th>
        <th scope="col">Ataque</th>
        <th scope="col">Defensa</th>
        <th scope="col">Ataque especial</th>
        <th scope="col">Velocidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${vida}</td>
        <td>${ataque}</td>
        <td>${defensa}</td>
        <td>${ataqueSpecial}</td>
        <td>${velocidad}</td>
      </tr>
    </tbody>
  </table>`


  })
  .catch((error) => {
    console.log('Error al obtener los datos del Pokémon:', error);
    alert('Nombre o ID incorrecto')
  });
  
}