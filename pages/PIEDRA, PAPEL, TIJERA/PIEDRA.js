import "./piedra.css";
import { printTemplate as HomeTemplate } from "../Home/Home";


const piedraTemplate = () => `
<div class="title-general"><img class="logopiedra" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675643993/ppot-logo_kztrkv.png" alt= "Piedra Papel Tijera Logo/></div>
<div class="backpiedra">

    <button class="backpiedrabtn" id="backpiedrabtn"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675439655/flecha-izquierda_kuak2y.png" alt="back Icon">Back</button>
<section class="container">
<div id="results" class="results"><h2></h2></div>
<div class="container-general">
<h4 class="jugadortitle">Jugador 1</h4>
<div class="player1">
<button id ="piedra" class="piedra"><img class="img-piedra" src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639881/piedra_r7bzuf.png" alt="piedra Icon"></button>
<button id ="papel" class="papel"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639884/papel_nzxhbd.png" alt="papel Icon"></button>
<button id ="tijera"class="tijera"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639876/tijera_e5cio6.png" alt="papel Icon"></button>
</div>
<div class="print-container">
</div>
<div class="print-container2">
</div>

<div class="player2">
<button class="piedra2"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639881/piedra_r7bzuf.png" alt="piedra Icon"></button>
<button class="papel2"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639884/papel_nzxhbd.png" alt="papel Icon"></button>
<button class="tijera2"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675639876/tijera_e5cio6.png" alt="papel Icon"></button>
</div>
<h4 class="jugadortitle">Jugador 2</h4>
</div>
</section>
<button id="again-piedra" class="again-piedra">Volver a jugar</button>


    `;

const piedraPlayer1 = () => {
  const piedra = document.querySelector("#piedra");
  piedra.addEventListener("click", () => {
    player1 = []
    player1.push(1);
    const container = document.querySelector(".print-container")
    container.innerHTML = ""
    container.innerHTML = `<h3>Piedra</h3>`
    result();
    
  }); 
  
};

const papelPlayer1 = () => {
  const papel = document.querySelector("#papel");
  papel.addEventListener("click", () => {
    player1 = []
    player1.push(2);
    const container = document.querySelector(".print-container")   
    container.innerHTML = ""
    container.innerHTML = `<h3>Papel</h3>`
    result();
   
  });
};

const tijeraPlayer1 = () => {
  const tijera = document.querySelector("#tijera");
  tijera.addEventListener("click", () => {
    player1 = []
    player1.push(3);
    const container = document.querySelector(".print-container")
    container.innerHTML = ""
    container.innerHTML = `<h3>Tijera</h3>`
    result();
  });
};

const piedraPlayer2 = () => {
    const piedra2 = document.querySelector(".piedra2");
    piedra2.addEventListener("click", () => {
        player2 = []
      player2.push(1);
      const container = document.querySelector(".print-container2")
      container.innerHTML = ""
    container.innerHTML = `<h3>Piedra</h3>`
    result();
    });
  };

  const papelPlayer2 = () => {
    const papel2 = document.querySelector(".papel2");
    papel2.addEventListener("click", () => {
        player2 = []
      player2.push(2);
      const container = document.querySelector(".print-container2")
      container.innerHTML = ""
    container.innerHTML = `<h3>Papel</h3>`
    result();
    });
  };

  const tijeraPlayer2 = () => {
    const tijera = document.querySelector(".tijera2");
    tijera.addEventListener("click", () => {
        player2 = []
      player2.push(3);    
      const container = document.querySelector(".print-container2")
      container.innerHTML = ""
    container.innerHTML = `<h3>Tijera</h3>`
    result();
    });
  };

  let player1 = []
  let player2 = []

  const result = () => {

    if (player1 == 1 && player2 == 1 || player1  == 2 && player2  == 2 || player1  == 3 && player2 == 3){
        let player1 = []
        let player2 = []
        const container = document.querySelector(".results")
        container.innerHTML = ""
        container.innerHTML = `<h3>EMPATE!</h3>`
        
        
       
    }
    if (player1 == 1 && player2 == 3 || player1  == 2 && player2  == 1 || player1  == 3 && player2 == 2){
        let player1 = []
        let player2 = []
       const container = document.querySelector(".results")
       container.innerHTML = ""
       container.innerHTML =`<h3>GANA EL JUGADOR 1</h3>`

    }
   if (player1 == 1 && player2 == 2 || player1  == 2 && player2  == 3 || player1  == 3 && player2 == 1){
        let player1 = []
        let player2 = []
       const container = document.querySelector(".results")
       container.innerHTML = ""
       container.innerHTML = `<h3>GANA EL JUGADOR 1</h3>`
       
    }}
  

    const BtnListener = () => {
        const backBtn = document.querySelector("#backpiedrabtn")
        backBtn.addEventListener("click", () => {
            HomeTemplate();
            
            
        })
      }

      const againBtn = () => {
        const againBtn = document.querySelector("#again-piedra")
        againBtn.addEventListener("click", () => {
            player1 = []
            player2 = []
            
            printTemplate ()
    
    
        })
      }
     
export const printTemplate = () => {
  document.querySelector("#app").innerHTML =
   piedraTemplate();
  piedraPlayer1();
  papelPlayer1();
  tijeraPlayer1();
  piedraPlayer2();
  papelPlayer2();
  tijeraPlayer2();
  BtnListener();
  againBtn();
 
  
};
