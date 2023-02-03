import ("./POKEAPI.css")
let mapCharacters = []

const container = document.querySelector("#container");
const templatePokeApi = () =>

`
<div class="container-poke">
<div class="inputDiv"><input type="text" id="searchInput" class="input" placeholder="Busca tu pokemon"/></div>
<nav id="navBar" class="nav"></nav>

<h1>PokeApi</h1>
<section id="gallery" class="gallery">
</section>

</div>
`


const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let characters = []
const getCharacters = async () => {
    for (let i = 1; i <= 150; i++){
        const data = await fetch(`${Url}${index}`)
        index++
        const json = await data.json();
        characters.push(json);
    }
    mappedCharacters(characters)
}




const mappedCharacters = () =>{
 mapCharacters =characters.map((character) =>({
    image: character.sprites.other.dream_world.front_default,
    id: character.id,
    name: character.name,
    height: (character.height)*10,
    weight: (character.weight) /10,
    type: character.types[0].type.name,
    type_2: character.types[1]?.type.name,
})) 

printCharacters(mapCharacters)
 
}


const printCharacters = (characters) => {
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = ""
    for (const character of characters){
        const figure = document.createElement("figure");
        const caraB = document.createElement("figure");
        const carta = document.createElement("div")
        figure.innerHTML = `
        <h3>${character.id}</h3>
        <h2>${character.name}</h2>
        <img src=${character.image} alt= ${character.name}
        <h3>${character.height}</h3>
        <h3>${character.weight}</h3>
        <h3 class=${character.type}>${character.type}</h3>
        <h3 class=${character.type_2}>${character.type_2}</h3>
        `
        figure.classList.add("cara")
       carta.appendChild(figure);
       carta.appendChild(caraB);
        caraB.classList.add("caraB");
        gallery.appendChild(carta)
        carta.classList.add("cartaBox")
     }
}


export const printTemplate = () => {
    document.querySelector("#app").innerHTML =
    templatePokeApi();
    getCharacters();
   addListener()
   getButtons()
 
    
    }
 

    const addListener = () => {
    const searchInput = document.querySelector("#searchInput")
    searchInput.addEventListener("input", () => {
    filterCharacters(mapCharacters)
    } )
   
    } 
   
    const filterCharacters = (characters) => {
        console.log(searchInput.value)
        const filtered = characters.filter((character) => character.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        console.log(filtered)
        printCharacters(filtered)
       
    }

    const categorias = ["grass", "poison", "fire", "flying", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon"]; 

   const getButtons = () =>{
    const naveBar = document.querySelector("#navBar")
    for (const type of categorias){
        const categoryBtn = document.createElement("button")
        categoryBtn.innerText = type
        categoryBtn.classList.add(type)
        naveBar.appendChild(categoryBtn)
        categoryBtn.addEventListener("click", (ev) =>{
            
        })
    }
   }



