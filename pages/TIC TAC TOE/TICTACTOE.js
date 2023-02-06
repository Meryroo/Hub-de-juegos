import("./TICTACTOE.css");

const template = () => `
<div class="tictaclogo">
<img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675713531/tictactoe_v5lmwr.gif" alt="tictactoe Logo"/>
</div>
<section class="tictac">
<div class="board">
<button id="uno"></button>
<button id="dos"></button>
<button id="tres"></button>
<button id="cuatro"></button>
<button id="cinco"></button>
<button id="seis"></button>
<button id="siete"></button>
<button id="ocho"></button>
<button id="nueve"></button>
</div>
<div class="results"></div>
</section>
`;

const fichas = ["❌", "❤️"];
let fila1 = [1,2,3,];
let fila2 = [4,5,6];
let fila3 =[7,8,9];





console.log(fila1)

const btnListener1 = () => {
  const btn1 = document.querySelector("#uno");
  btn1.addEventListener("click", () => {
    btn1.innerHTML += `${fichas[0]}`;
    btn1.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn1.disabled = true;
    (fila1[0]) = `${btn1.classList}`
    console.log(fila1);
    compare();

    
  });
};
console.log(fila1)

const btnListener2 = () => {
  const btn2 = document.querySelector("#dos");
  btn2.addEventListener("click", () => {
    btn2.innerHTML += `${fichas[0]}`;
    btn2.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn2.disabled = true;
    (fila1[1]) = `${btn2.classList}`
    console.log(fila1)
    compare();
   
  });
};

const btnListener3 = () => {
  const btn3 = document.querySelector("#tres");
  btn3.addEventListener("click", () => {
    btn3.innerHTML += `${fichas[0]}`;
    btn3.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn3.disabled = true;
    (fila1[2]) = `${btn3.classList}`
    console.log(fila1)
    compare();
   
  });
};
const btnListener4 = () => {
  const btn4 = document.querySelector("#cuatro");
  btn4.addEventListener("click", () => {
    btn4.innerHTML += `${fichas[0]}`;
    btn4.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn4.disabled = true;
    (fila2[0]) = `${btn4.classList}`
    console.log(fila2)
    compare();
    
  });
};

const btnListener5 = () => {
  const btn5 = document.querySelector("#cinco");
  btn5.addEventListener("click", () => {
    btn5.innerHTML += `${fichas[0]}`;
    btn5.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn5.disabled = true;
    (fila2[1]) = `${btn5.classList}`
    console.log(fila2)
    compare();
    
  });
};
const btnListener6 = () => {
  const btn6 = document.querySelector("#seis");
  btn6.addEventListener("click", () => {
    btn6.innerHTML += `${fichas[0]}`;
    btn6.classList.add(`${fichas[0]}`)
    fichas.reverse();
    btn6.disabled = true;
    (fila2[2]) = `${btn6.classList}`
    console.log(fila2)
    compare();
    
  });
};

const btnListener7 = () => {
    const btn7 = document.querySelector("#siete");
    btn7.addEventListener("click", () => {
      btn7.innerHTML += `${fichas[0]}`;
      btn7.classList.add(`${fichas[0]}`)
      fichas.reverse();
      btn7.disabled = true;
      (fila3[0]) = `${btn7.classList}`
    console.log(fila3)
    compare();
   
    });
  };
  
  const btnListener8 = () => {
    const btn8 = document.querySelector("#ocho");
    btn8.addEventListener("click", () => {
      btn8.innerHTML += `${fichas[0]}`;
      btn8.classList.add(`${fichas[0]}`)
      fichas.reverse();
      btn8.disabled = true;
      (fila3[1]) = `${btn8.classList}`
      console.log(fila3)
      compare();
      
    });
  };
  const btnListener9 = () => {
    const btn9 = document.querySelector("#nueve");
    btn9.addEventListener("click", () => {
      btn9.innerHTML += `${fichas[0]}`;
      btn9.classList.add(`${fichas[0]}`)
      fichas.reverse();
      btn9.disabled = true;
      (fila3[2]) = `${btn9.classList}`
      console.log(fila3)
      compare();
      
    });
  };
  

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  btnListener1();
  btnListener2();
  btnListener3();
  btnListener4();
  btnListener5();
  btnListener6();
  btnListener7();
  btnListener8();
  btnListener9();  
 empate();
  

};


const compare = () => {
    const myContainer = document.querySelector(".results")
    for (let i = 1; i <=9; i++){
        //horizontales
        if (fila1[0] == fila1[1] && fila1[1]== fila1[2]){
            myContainer.innerHTML = `
            <h4>¡FELICIDADES! has ganado jugador ${fila1[0] }</h4>`
        }
        if (fila2[0] == fila2[1] && fila2[1]== fila2[2]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[0] }</h4>`
        }
        if (fila3[0] == fila3[1] && fila3[1]== fila3[2]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila3[0] }</h4>`
            //verticales
        }
        if (fila1[0] == fila2[0] && fila2[0]== fila3[0]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[0] }</h4>`
        }
        if (fila1[1] == fila2[1] && fila2[1]== fila3[1]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[1] }</h4>`
        }
        if (fila1[2] == fila2[2] && fila2[2]== fila3[2]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[2] }</h4>`
        }
        //diagonales
        if (fila1[0] == fila2[1] && fila2[1]== fila3[2]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[1] }</h4>`
        }
        if (fila1[2] == fila2[1] && fila2[1]== fila3[0]){
            myContainer.innerHTML = `
            <h4>Ha ganado el jugador ${fila2[1] }</h4>`
        }  
    }
    }

    const empate = () => {
        
        for (let i = 1; i <=9; i++){
            
            
            
        }
    }

