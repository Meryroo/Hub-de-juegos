import ("./POKEAPI.css")
import { printTemplate } from "../Home/Home";
import { PokeCard } from "../../components/POKECARD/POKECARD";



export const templatePokeApi = () =>
document.querySelector("#app").innerHTML =`
<section id="pokeApi" class="pokeApi">
<h1>PokeApi</h1>
<div id="container"></div>
</section>

`
templatePokeApi()

const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let characters = []
const getCharacters = async () => {
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
    type: character.types[0].type.name

}))
newCharacters.push(mapCharacters)
for (const key in newCharacters[0]){
 for (const clave in newCharacters[0][key]){
    console.log(`la clave es ${clave} y su valor es ${newCharacters[0][key][clave]}`)
 }
}
}


getCharacters()



const container = document.querySelector("#container")
console.log(container)





