import ("./Home.css")
import { initContent } from "../../main"
import { printTemplate as PokeApiTemplate } from "../POKEAPI/POKEAPI"
import { printTemplate as piedrTemplate } from "../PIEDRA, PAPEL, TIJERA/PIEDRA"

 export const homeTemplate = () =>`

<section class="sectionhome">
<h1>Hub de juegos</h1>
<h2 class="saludo"></h2>
<div class= home>
<img class="piedraBtn" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675728930/piedra_icono_sc8mar.webp" alt="piedra game"/>
<img class="bola" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675729580/pokemon_bg_meqgm9.jpg" alt="pokeaki" />
<img class="ticBtn" src ="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675729850/tic_ilvhdi.jpg" alt="TicTacToe Game"
</div>
</section>
`
 const addListenerPoke = () => {
    document.querySelector(".bola").addEventListener("click", () =>{
        initContent("pokeApi")
    
    })
}

 const addListenerPiedra = () => {
  const piedra = document.querySelector(".piedraBtn")
    piedra.addEventListener("click", () => {
        initContent("Piedra")

    })
}

const addListenerQuiz = () => {
    const quiz = document.querySelector(".quizBtn")
      quiz.addEventListener("click", () => {
          initContent("QuizGame")
  
      })
  }

  const addListenerTic = () => {
    const tic = document.querySelector(".ticBtn")
      tic.addEventListener("click", () => {
          initContent("TicTacToe")
  
      })
  }

export const printTemplate = () =>{
    document.querySelector("#app").innerHTML =
    homeTemplate();
    addListenerPoke();
    addListenerPiedra();
    addListenerTic();
    sayHi();
}

const sayHi = () => {
    const user = localStorage.getItem("user")
    const myh2 = document.querySelector(".saludo")
    myh2.innerHTML = `Hola ${user}!`
}


