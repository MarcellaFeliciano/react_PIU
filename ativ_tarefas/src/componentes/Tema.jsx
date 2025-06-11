
import './Tema.css'
import { useState } from 'react'

export default function Tema({children}){
    const[theme,setTheme] = useState('light')

    // função que lida com a mudança de estado do tema, pegando uma função anonima, var auxiliar, para chamar a função do useState setTheme
    const toggleTheme = () => {setTheme((tema) => (tema === 'light'?'dark':'light'))}

    return(
        // altera o nome da classe do CSS, mudando a cor de acordo com a variavel thema
        <div className={theme}>
            <button onClick={toggleTheme}>
                {/* mostrar na tela caso o tema seja claro ou escuro */}
                Alterar tema - {theme === 'light'?'Claro':'Escuro'}
            </button>

            {/* chama o componente dashboard (que é filho de tema) */}
           
           {children}
        </div>

    )
}