
import { useState } from "react"
import { useEffect } from "react"
import './Tema.css'

export default function InputEffect() {

    const [texto, setTexto] = useState('')

    useEffect(() => {
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        const div = document.getElementsByClassName('conteudo')[0]
        div.style.backgroundColor = randomColor

    }, [texto])

    return (
        
        <input type="text" onChange={(e) => setTexto(e.target.value)} value={texto} placeholder='Texto'/>
        
    )
}