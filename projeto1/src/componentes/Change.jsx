import { useState } from "react"
// importar um rock referente ao estado de um elemento 0 o use state monitora o stado de valores 

 // 

export default function Change(){
    //let valor = 0
    //variavel valor e a função que vai manipular ela é a setValor / recebe como valor inicializado pelo valor 0

    let [numero, setNumero] = useState(0)
    let [valor, setValor] = useState("nome")

    let [valor2, setValor2] = useState(1)

    function sets()
    {
        setValor(valor+valor2)
        setValor2(valor2+1)
    }

    return(
        <div>
            <button onClick={ ()=> setNumero(numero+1)}>{numero}Cliques</button>
            <button onClick={sets}>{valor}Cliques</button>
            <p>{valor2}</p>
        </div>
    )
}

