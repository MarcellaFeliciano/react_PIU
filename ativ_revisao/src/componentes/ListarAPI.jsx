
import { useState } from "react";
import { useEffect } from "react";

export default function ListarAPI() {
    const [lista, setLista] = useState([]);
  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchLista = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setLista(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }
    fetchLista();
  }, []); 

  // Exemplo de filtragem: filtra usuários cujo nome começa com a letra 'L'
    const usuariosFiltrados = lista.filter(usuario => usuario.name.startsWith('M'));

    return (
        <div>
            <h2>Lista de Usuários - Inicial M</h2>
            <ul>
                {usuariosFiltrados.map(usuario => (
                    <li key={usuario.id}>
                        <strong>Nome:</strong> {usuario.name} <br />
                        <strong>Usuário:</strong> {usuario.username} <br />
                        <strong>Email:</strong> {usuario.email} <br />
                        <strong>Telefone:</strong> {usuario.phone} <br />
                    </li>
                ))}
            </ul>

        </div>
    )
}