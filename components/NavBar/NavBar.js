import ("./NavBar.css")


export const template = () =>`
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

};