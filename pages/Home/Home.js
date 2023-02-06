import ("./Home.css")
import { initContent } from "../../main"
import { printTemplate as PokeApiTemplate } from "../POKEAPI/POKEAPI"
import { printTemplate as piedrTemplate } from "../PIEDRA, PAPEL, TIJERA/PIEDRA"

 export const homeTemplate = () =>`

<section class="sectionhome">
<h1>Hub de juegos</h1>
<div class= home>
<img class="bola" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675437563/pokemon.png_o6h50v.png" alt="pokeaki" />
<img class="piedraBtn" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675507689/logo_piedra_papel_f1w8xm.webp" alt="piedra game"/>
<img class="quizBtn" src ="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675519819/quiz_game_kwizrc.png" alt="Quiz Game"/>
<img class="ticBtn" src ="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675623058/tictac_dn4tsl.png" alt="TicTacToe Game"
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
    addListenerQuiz();
    addListenerTic();
}



