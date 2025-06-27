import { useState } from "react";

export default function Formulario(){

    const [tarefas, setTarefas] = useState([])
    const [tarefa, setTarefa] = useState('')

    const handleTarefas = (e) => {
        setTarefa(e.target.value)

    }
    const submitTarefas = (e) => {
        e.preventDefault();

        setTarefas([...tarefas, tarefa])
        setTarefa('')
    }

    const handleClear = () => {
        setTarefas([])
    }

    return(

        <div>
            <form>

                <span>Nome da atividade</span>
                <input onChange={handleTarefas} type="text" placeholder="Titulo da atividade" value={tarefa}></input>

                <input onClick={submitTarefas} type="submit" value='Enviar' />
            </form>
            <button onClick={handleClear}>Reset</button>

            <div>
                <ul>
                    {tarefas.map((item) =>
                    <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}