import ("./POKEAPI")

import axios from "axios"


export const templatePokeApi = () =>`
<section id="pokeApi"></section>
<h1>PokeApi</h1>
<div></div>
`


const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let character = []
const getCharacters = async () => {
    for (let i = 1; i <= 150; i++){
        const data = await fetch(`${Url}${index}`)
        index++
        const json = await data.json()
        console.log(json.types[1])
        
    }
    
}

export const mappedCharacters = () =>{
const mapCharacters = json.map((character) =>({
    
    id: character.id,
    name: character.name,
    height: (character.height)*10,
    weight: (character.weight) /10,
    type: character.types[0].type.name && json.types[1].type.name,






}))
}
    
getCharacters()