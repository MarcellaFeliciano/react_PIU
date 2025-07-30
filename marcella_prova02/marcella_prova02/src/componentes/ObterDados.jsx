
import { useState } from "react";
import { useEffect } from "react";
import './Dados.css'
export default function ObterDados(){
    const [id,setId] = useState('')
    const [lista, setLista] = useState([])

    useEffect(() => {
        const fetchLista = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
            const data = await response.json(); 
            setLista(data); 
          } catch (error) {
            console.error("Erro ao buscar usuários:", error);
          }
        }
        fetchLista();
        }, [id]); 

    const handleAcesso = () => {
        setId('')
    }

    const tarefasFiltradas = lista.filter(tarefa => tarefa.userId === Number(id));
    return (
        <div className="div_obterdados">
            <div className="div_dados">
            <button onClick={handleAcesso}>Novo acesso</button>
            <form>
                <h3>Selecione o ID</h3>
                <select id="userID" onChange={(e) => setId(e.target.value)} value={id}>
                    <option value="1">Id 1</option>
                    <option value="2">Id 2</option>
                    <option value="3">Id 3</option>
                    <option value="4">Id 4</option>
                    <option value="5">Id 5</option>
                    <option value="6">Id 6</option>
                    <option value="7">Id 7</option>
                    <option value="8">Id 8</option>
                    <option value="9">Id 9</option>
                    <option value="10">Id 10</option>
                </select>
            </form>
            <div>
                <h2>Lista de Tarefas - UserID {id}</h2>
                <ul>
                    {tarefasFiltradas.map(tarefa => (
                        <li key={tarefa.id}>
                            <strong>Titulo:</strong>{tarefa.title}<br/>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        

        </div>
    


    )

}