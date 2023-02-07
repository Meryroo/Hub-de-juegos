import ("./POKEAPI.css")
import { printTemplate as HomeTemplate } from "../Home/Home"

let mapCharacters = []


const templatePokeApi = () =>

`
<div class="logo"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675622083/International_Pok%C3%A9mon_logo.svg_cdagwo.png" alt="pokemon Logo"</div>
<div class="container-poke">
<div class="inputDiv">
    <button class="backBtn" id="backBtn"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675439655/flecha-izquierda_kuak2y.png" alt="back Icon">Back</button>
    <input type="text" id="searchInput" class="input" placeholder="Pokebúsqueda..."/>
</div>
<nav id="navBar" class="nav">
<button id="allBtn" type="button" class="all" >All</button>
</nav>
<div class="loading">
<div class="loading-icon"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675677998/pokebola_itbggp.png" alt="loading Icon"/></div>
</div>
<section id="gallery" class="gallery">
</section>

</div>
`


const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let characters = []
const getCharacters = async () => {
    const container = document.querySelector(".loading")
    container.style.display = "block"
    for (let i = 1; i <= 150; i++){
        const data = await fetch(`${Url}${index}`)
        index++
        const json = await data.json();
        characters.push(json);

    }
    mappedCharacters(characters)
    container.style.display = "none"
}

const mappedCharacters = () =>{
 mapCharacters =characters.map((character) =>({
    image: character.sprites.other.dream_world.front_default,
    id: character.id,
    name: character.name,
    height: (character.height)*10,
    weight: (character.weight) /10,
    types: character.types
  
})) 

printCharacters(mapCharacters)
 
}


const printCharacters = (characters) => {
    
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = ""
    for (const character of characters){
        const figure = document.createElement("figure");
        const carta = document.createElement("div")
    
        figure.innerHTML = `
        <h3>ID: ${character.id}</h3>
        <h3 ></h3>${character.name}</h3>
        <img src=${character.image} alt= ${character.name}
        <h4 class="footercard"> Altura: ${character.height}cm</h4>
        <h4 class="footercard">Peso: ${character.weight}kg</h4>
          
        `
       for (const tp of character.types){
        const p = document.createElement("p");
        p.innerText = tp.type.name;
        figure.appendChild(p);
       }
        figure.classList.add(`${character.types[0].type.name}`)
        gallery.appendChild(figure)
     }
     
        
}


export const printTemplate = () => {
    document.querySelector("#app").innerHTML =
    templatePokeApi();
    getCharacters();
    addListener();
    getButtons();
    BtnListener();
    allCharacters();
 
    
    }
 

    const addListener = () => {
    const searchInput = document.querySelector("#searchInput")
    searchInput.addEventListener("input", () => {
    filterCharacters(mapCharacters)
    } )
   
    } 
   
    const filterCharacters = (characters) => {
        const filtered = characters.filter((character) => character.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        printCharacters(filtered)
       
    }

    const categorias = ["grass", "poison", "fire", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "ice", "ghost", "dragon", ]; 
    

   const getButtons = () =>{
    const naveBar = document.querySelector("#navBar")
    for (const type of categorias){
        const categoryBtn = document.createElement("button")
        categoryBtn.classList.add( type)
       categoryBtn.innerHTML = `${type}`
        naveBar.appendChild(categoryBtn)
        categoryBtn.addEventListener("click", () =>{
            getCategory(mapCharacters, type)
            
        })
    } 
   }

  const getCategory = (characters,type, ) => {
const filterCategory = characters.filter((character) => character.types[0].type.name === type)
printCharacters(filterCategory)
  }


  const BtnListener = () => {
    const backBtn = document.querySelector("#backBtn")
    backBtn.addEventListener("click", () => {
        HomeTemplate()
    })
  }
  
  const allCharacters = () => {
    const allBtn = document.querySelector("#allBtn")
    allBtn.addEventListener("click", () =>{
        getCharacters()
    })
  }
  
const images = {
    "grass": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440158/grass_tlu0bi.svg",
    "poison": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440160/poison_hi87h6.svg",
    "fire": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440158/fire_iqrdi1.svg",
    "water": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440160/water_ihe2ug.svg",
    "bug": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440157/bug_yytmdn.svg",
    "normal": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440159/normal_vxobrr.svg",
    "electric": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440157/electric_paoyq7.svg",
    "ground": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440159/ground_dukqhp.svg",
    "fairy": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440157/fairy_coy3ii.svg",
    "figthting": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440157/fighting_iffvdk.svg",
    "psychic": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440160/psychic_tw40y4.svg",
    "rock": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440160/rock_ti5d3g.svg",
    "ice": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440159/ice_vey6vh.svg",
    "ghost": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440158/ghost_j67mib.svg",
    "dragon": "https://res.cloudinary.com/dnkacmdmh/image/upload/v1675440157/dragon_jlsvku.svg",
  
  }
  
  
