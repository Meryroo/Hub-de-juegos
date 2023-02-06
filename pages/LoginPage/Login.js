import { initContent } from "../../main";
import { printTemplate as printHome } from "../Home/Home";


import ("./Login.css")

 const template = () => `
<section class="loginPage">
<h1>Registrate para jugar!</h1>
<div>
<input type="input" id="username" placeholder="Introduce tu nombre"/>
<button type="button" id="loginBtn">Login</button>
</div>
</section>
 
`;


 const addListener = () =>{
const userName = document.querySelector("#username");
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", () =>{
localStorage.setItem("user" , userName.value)
if (localStorage.getItem("user")){
    initContent("Home")
    
} })

};


 export const printTemplate = () =>{
    document.querySelector("#app").innerHTML =
    template();
    addListener();

}