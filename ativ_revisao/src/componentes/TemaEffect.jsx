
import { useState } from "react"
import { useEffect } from "react"
import './Tema.css'


export default function TemaEffect(){
    const [theme, setTheme] = useState('white')

    const toggleTheme = () => {setTheme((prev) => (prev === 'white'? "black" : "white"))}

    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme])


    return (
        <div>
            <button onClick={toggleTheme}> Alterar Tema</button>

          
        </div>
    )
}