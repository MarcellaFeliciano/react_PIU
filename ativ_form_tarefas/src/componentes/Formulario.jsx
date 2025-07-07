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
            <form className="formTarefa">

                <span>Nome da atividade</span>
                <input onChange={handleTarefas} type="text" placeholder="Titulo da atividade" value={tarefa}></input>

                <input className="bt_enviar" onClick={submitTarefas} type="submit" value='Enviar' />
            </form>
            <button onClick={handleClear}>Reset</button>

            <div>
                <div className="tarefa">
                    {tarefas.map((item) =>
                    <div>
                        <h5>Tarefa: {item}</h5> 
                        <h6>Status:</h6>
                    </div>)}
                </div>
            </div>
        </div>
    )
}