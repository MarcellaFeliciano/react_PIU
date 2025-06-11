
import './Tema.css'
import { useState } from 'react'

export default function Tema({children}){
    const[theme,setTheme] = useState('light')

    // função que lida com a mudança de estado do tema, pegando uma função anonima, var auxiliar, para chamar a função do useState setTheme
    const toggleTheme = () => {setTheme((tema) => (tema === 'light'?'dark':'light'))}


    const [cont,setCont] = useState(0)


    let buttonColor = 'padrao'
    if (cont >= 10) {
        buttonColor = 'green';
    } else if (cont < 0) {
        buttonColor = 'red';
    } else {
        buttonColor = 'padrao';
    }
    
    return(
        // altera o nome da classe do CSS, mudando a cor de acordo com a variavel thema
        <div className={theme}>
            <button onClick={toggleTheme}>
                {/* mostrar na tela caso o tema seja claro ou escuro */}
                Alterar tema - {theme === 'light'?'Claro':'Escuro'}
            </button>

            {/* chama o componente dashboard (que é filho de tema) */}
           

            <h4>Contador = {cont}</h4>
           <button className={buttonColor} onClick={() => setCont((count) => count + 1)}>Acrescentar</button>
           <button className={buttonColor} onClick={() => setCont((count) => count - 1)}>Diminuir</button>
           {children}
        </div>

    )
}