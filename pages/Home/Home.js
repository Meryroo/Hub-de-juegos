import ("./Home.css")
import { templatePokeApi } from "../POKEAPI/POKEAPI"

 export const homeTemplate = () =>`

<section>
<h1>HUB DE JUEGOS</h1>
<div class= gallery>
<div><a href="#" id="pokeApiBtn"/>PokeApi</div>
<div>box2</div>
<div>box3</div>
<div>box4</div>
<div>box5</div>
<div>box6</div>
</div>
</section>
`

export const printTemplate = () =>{
    document.querySelector("#app").innerHTML =
    homeTemplate()
}

export const addListenerPoke = () => {
    const container = document.querySelector("#app")
    document.querySelector("#pokeApiBtn").addEventListener("click", () =>{
        container.innerHTML = templatePokeApi()
    
    })
}
