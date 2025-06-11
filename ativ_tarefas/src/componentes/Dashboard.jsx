import './Dashboard.css';
import { useState } from 'react';
import Tarefa from './Tarefa';

export default function Dashboard({ tarefas }) {
    const [listaTarefas, setListaTarefas] = useState(tarefas);

    // Função para alterar o status da tarefa
    const handleStatus = (tarefaId) => {
        // Criar uma nova lista de tarefas com o status alterado
        const novasTarefas = listaTarefas.map((tarefa) => {
            if (tarefa.id === tarefaId) {
                // Alterar o status da tarefa
                if (tarefa.status === 'Pendente') {
                    tarefa.status = 'Concluida';
                } else {
                    tarefa.status = 'Pendente';
                }
            }
            return tarefa;
        });
        
        // Atualizar o estado com a nova lista de tarefas
        setListaTarefas(novasTarefas);
    };

    return (
        <>
            <h2>Lista de Tarefas</h2>
            <div className='dashboard'>
                {/* Listar as tarefas */}
                {listaTarefas.map((tarefa) => (
                    <Tarefa
                        key={tarefa.id}
                        titulo={tarefa.titulo}
                        descricao={tarefa.descricao}
                        status={tarefa.status}
                        onClick={()=> handleStatus(tarefa.id)}
                    />
                ))}
            </div>
        </>
    );
}