
import './Tarefa.css'

export default function Tarefa ({titulo, descricao, status, onClick}){
    return(
        <div className="box_tarefa">

            <h3> tarefa</h3>
            <ul>
                <li>Tiulo: {titulo}</li>
                <li>Descricao: {descricao}</li>
                <li>Status: {status}</li>
                <button onClick={onClick}>{status === 'Pendente'?'Marcar como concluida':'Cancelar Conclusão'}</button>
            </ul>
        </div>
    )
}