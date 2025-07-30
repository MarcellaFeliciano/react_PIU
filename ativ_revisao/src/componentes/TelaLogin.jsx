
import { useState } from "react";
import "./TelaLogin.css"

export default function TelaLogin(){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nome)
        console.log(senha)
        setNome('')
        setSenha('')
    }
    return (

        <div className="div_login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome do Usuário</label>
                <input type="text" name='nome' onChange={(e) => setNome(e.target.value)} value={nome} placeholder="nome"/>
 
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' onChange={(e) => setSenha(e.target.value)} value={senha} placeholder="senha"/>
                <br></br>
                <input type="submit" value='Enviar'/>
            </form>

        </div>
    )
}