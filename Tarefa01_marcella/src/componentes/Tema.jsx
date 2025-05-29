import { useState } from "react";
import './Tema.css'

// definir variavel usestate para monitorar a cor/tema
// definir função que faz a alteração do estado da variavel do usestate
//criar componete com children de galeria

export default function Tema({children}){

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {setTheme((tema) => (tema === 'light'?'dark':'light'));

    };
    return (

        <div className={theme}>

            <button onClick={toggleTheme}>Alterar Tema - {theme === 'light'?'claro':'escuro'}</button>
        
            {children}
        </div>

    )

}










// import { useState } from "react";

// function Tema(){

//     let [isDark, setIsDark] = useState(false)


//     if(isDark){
//     document.body.style.backgroundColor = "black";
    
//     } else {
//     document.body.style.backgroundColor = "white";
//     }

//     return(
//          <>
//             <button onClick={() => setIsDark(!isDark)}>Mudar Tema</button>
//          </>
//      )
//  }

// export default Tema
