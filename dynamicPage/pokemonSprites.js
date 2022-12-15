//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector("#container");
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    let pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    let span = document.createElement("span");
    span.innerText = `#${i}`
    let br = document.createElement("br");
    let img = document.createElement("img");
    img.src = `${baseUrl}${i}.png`

    pokemon.appendChild(img);
    pokemon.appendChild(br);
    pokemon.appendChild(span);

    container.appendChild(pokemon);
}



