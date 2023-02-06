import ("./QUIZGAME.css")

const quizTemplate = () =>`
<h2 class="quiz">Quiz Game</h2>
<button class="backBtn" id="backBtn"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675439655/flecha-izquierda_kuak2y.png" alt="back Icon">Back</button>
<section class="quizContainer">
<div id="askContainer"></div>
<div id="answerContainer" class="answerContainer">
</div>
<div>
<button id="again">Volver a jugar</button></>
</section>`




const questions = [{
    pregunta: "¿Qué tipos de datos Javascript devuelven valor true o false?",
    respuestas: {
       uno:{valor: "Boolean", correcta: true },
        dos: {valor: "String", correcta: false },
        tres: {valor: "Array" , correcta: false},
        cuatro: {valor:"Ninguna es correcta", correcta: false },
        
    }
},
{
    pregunta: "¿Cuál de estos elementos no es un tipo de bucle?",
    respuestas: {
       uno:{valor: "For each", correcta: false },
        dos: {valor: "For of", correcta: false },
        tres: {valor: "Array" , correcta: true},
        cuatro: {valor:"Todas son correctas", correcta: false },
    }
},

{
    pregunta: "¿Para qué sirve el método push?",
    respuestas: {
       uno:{valor: "Para dividir un array en dos", correcta: false },
        dos: {valor: "Para vaciar todos los elementos de un array", correcta: false },
        tres: {valor: "Para seleccionar un elemento dentro de un array" , correcta: true},
        cuatro: {valor:"Para añadir o añadir uno o más elementos al final de un Array", correcta: true },
    }
},
{
    pregunta: "¿Para qué sirve el método push?",
    respuestas: {
       uno:{valor: "Para dividir un array en dos", correcta: false },
        dos: {valor: "Para vaciar todos los elementos de un array", correcta: false },
        tres: {valor: "Para seleccionar un elemento dentro de un array" , correcta: true},
        cuatro: {valor:"Para añadir o añadir uno o más elementos al final de un Array", correcta: true },
    }
},
{
    pregunta: "El lenguaje JavaScript nos permite modificar",
    respuestas: {
       uno:{valor: "La estructura y contenido de una página web.", correcta: false },
        dos: {valor: "La presentación de una página web.", correcta: false },
        tres: {valor: "La estructura, contenido y presentación de una página web" , correcta: true},
        cuatro: {valor:"Ninguna de las anteriores es correcta.", correcta: true },
    }
}
]



 export const getRandomQuestions = () => {
  let newquestions = questions[Math.floor(Math.random() * questions.length)];
 getQuestion(newquestions);
 getAnswer (newquestions);
 againBtn()
}


const getQuestion = (questions) => {
const myContainer = document.querySelector("#askContainer");
const h3 = document.createElement("h3")
for (const key in questions){
    console.log(questions.pregunta)
        h3.innerText= questions.pregunta;
        myContainer.appendChild(h3)  
}
}
    

const getAnswer = (questions) => {
    const myContainer = document.querySelector("#answerContainer")
    for (const key in questions.respuestas){
        const myBtns = document.createElement("button")
        myBtns.innerText = questions.respuestas[key].valor;
        myBtns.classList.add(questions.respuestas[key].correcta)
        myContainer.appendChild(myBtns)
        myBtns.addEventListener("click", () => {
            if (myBtns.classList.contains(true)){
                myContainer.innerHTML ="";
                myContainer.innerHTML = `
                <h3 class="ganador">HAS GANADO!</h3>`;
            } 
            if (myBtns.classList.contains(false)){
                myContainer.innerHTML ="";
                myContainer.innerHTML = `
                <h3 class="ganador">MEJOR SUERTE LA PROXIMA VEZ</h3>`;
            } })}}
    
                 
 const againBtn = () => {
    const Btn = document.querySelector("#again")
    Btn.addEventListener("click", () => {
    printTemplate()

    })

 }

 export const printTemplate = () => {
    document.querySelector("#app").innerHTML = 
    quizTemplate ()
    getRandomQuestions ()

  
}