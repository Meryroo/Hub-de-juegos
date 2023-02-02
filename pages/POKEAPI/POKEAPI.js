import ("./POKEAPI.css")
const container = document.querySelector("#container")

export const templatePokeApi = () =>
`<div class="container-poke">
<h1>PokeApi</h1>
<section id="gallery" class="gallery">
</section>
</div>

`

const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let characters = []
export const getCharacters = async () => {
    for (let i = 1; i <= 150; i++){
        const data = await fetch(`${Url}${index}`)
        index++
        const json = await data.json() 
        characters.push(json)   
    }
    mappedCharacters()
}

let newCharacters = []
export const mappedCharacters = () =>{
const mapCharacters =characters.map((character) =>({
    image: character.sprites.other.dream_world.front_default,
    id: character.id,
    name: character.name,
    height: (character.height)*10,
    weight: (character.weight) /10,
    type: character.types[0].type.name,

}))
newCharacters.push(mapCharacters)

for (const character of newCharacters[0]){
    const figure = document.createElement("figure")
    figure.innerHTML = `
    <h3>${character.id}</h3>
    <h2>${character.name}</h2>
    <img src=${character.image} alt= ${character.name}
    <h3>${character.height}</h3>
    <h3>${character.weight}</h3>
    <h3>${character.type}</h3>
    `
    const gallery = document.querySelector("#gallery")
    gallery.appendChild(figure)
 }
 
}



getCharacters()

export const printTemplate = () => {
    document.querySelector("#app").innerHTML =
    templatePokeApi()
    getCharacters()
    
}







