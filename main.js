import './style.css'
import { printTemplate as loginTemplate } from './pages/LoginPage/Login';
import { printTemplate as HomeTemplate } from './pages/Home/Home';
import { printTemplate as NavBarTemplate } from './components/NavBar/NavBar';
import { printTemplate as PokeApiTemplate } from './pages/POKEAPI/POKEAPI';
import { printTemplate as piedraTemplate } from './pages/PIEDRA, PAPEL, TIJERA/PIEDRA';
import { printTemplate as QuizGameTemplate } from './pages/QUIZ GAME/QUIZGAME';
import { printTemplate as TicTacTemplate } from './pages/TIC TAC TOE/TICTACTOE';


export const initContent = (route) =>{
    switch (route) {
        case undefined:
        localStorage.getItem("user")? HomeTemplate() : loginTemplate()
        break;
    
        case "Home":
        HomeTemplate()
        break;

        case "pokeApi": PokeApiTemplate()
        break;     
            
        case "Piedra": piedraTemplate()
        break;  
        
        case "QuizGame": QuizGameTemplate()
        break;   

        case "TicTacToe": TicTacTemplate()
        break;       
    }
    }
    



initContent()
NavBarTemplate()

