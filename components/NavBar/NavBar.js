import ("./NavBar.css")
import { printTemplate as loginTemplate } from "../../pages/LoginPage/Login";


export const template = () =>`
<button type="button" class="logout"><img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675433475/flechas_x5bmcb.png" alt="logout Icon"</button>
<button type="button" id="themeBtn" class="themeBtn">🎲</button>

`;


export const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

const body = document.querySelector("body")
export const backgroundColor = () => {
    document.querySelector("#themeBtn").addEventListener("click", () =>{
    body.style.backgroundColor = getRandomColor()
    }
   )
}

 export const printTemplate = () => {
    document.querySelector("header").innerHTML = template();
    backgroundColor()
    addListenerLogout()
  
};
 

const addListenerLogout = () =>{
  const header = document.querySelector("header")
  const logoutBtn = document.querySelector(".logout")
  logoutBtn.innerHTML = `
  <img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1675433475/flechas_x5bmcb.png" alt="logout Icon">`
  header.appendChild(logoutBtn) 
  logoutBtn.addEventListener("click",() =>{
    localStorage.removeItem("user")
    loginTemplate()

}

)}

 


