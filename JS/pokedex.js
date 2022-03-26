// const fetchPokemon = () => {
//     const pokeName = document.getElementById("pokeName").value;
//     console.log(pokeName);
//     const url = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
//     fetch(url).then((resp) => {
//         console.log(resp);
//         return resp.json();
//     }).then((data) => {
//         console.log(data);
//         let pokeImg = data.sprites.other.dream_world.front_default;
//         console.log(pokeImg);
//         changePokeImg(pokeImg);
//     })
// }

const fetchPokemon2 = async () => {
    const pokeName = document.getElementById("pokeName").value.toLowerCase();
    try {
        const resp = await (await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName)).json();
        let pokeImg = resp.sprites.other.dream_world.front_default;
        changePokeData(pokeName, pokeImg, resp);
    } catch (error) {
        console.error(error);
    }
}

const changePokeData = (pokeName, url, resp) => {
    const div = document.getElementById("pokeInfo");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
      }

    console.log(resp);
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

    const pokeNameP = document.createElement('p');
    pokeNameP.innerText = pokeName;
    document.getElementById("pokeInfo").appendChild(pokeNameP);

    const pokeExperienceP = document.createElement('p');
    pokeExperienceP.innerText = `Experiencia: ${resp.base_experience}`;
    document.getElementById("pokeInfo").appendChild(pokeExperienceP);

    const pokeIdP = document.createElement('p');
    pokeIdP.innerText = `ID: ${resp.id}`;
    document.getElementById("pokeInfo").appendChild(pokeIdP);

    const pokeAbilitiesP = document.createElement('p');
    let abilities = '';
    for (let i = 0; i < resp.abilities.length; i++){
        abilities = abilities + '  ' + resp.abilities[i].ability.name;
    }
    pokeAbilitiesP.innerText = `Habilidades: ${abilities}`;
    document.getElementById("pokeInfo").appendChild(pokeAbilitiesP);
}