import './style.css'
import { printTemplate as loginTemplate } from './components/pages/LoginPage/Login'
import { printTemplate as HomeTemplate } from './components/pages/Home/Home';
import { printTemplate as NavbarTemplate, template } from './components/NavBar/NavBar';
import { addListenerPoke } from './components/pages/Home/Home';

export const initContent = (route) =>{
    switch (route) {
        case undefined:
            localStorage.getItem("user")? HomeTemplate() : loginTemplate()
            
            break;
    
        case "Home":
            HomeTemplate()
            break;
            
    }
}

export const initHome = (route) => {
    switch (route) {
        case "pokeApi":
            addListenerPoke()
            
            break;
    
    
            
    }
}

initContent()
NavbarTemplate()
addListenerPoke()
