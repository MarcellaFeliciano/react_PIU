

import { useState } from "react";
import './Login.css'

export default function TelaLogin(){
    const [login, setLogin] = useState('')
    const [chave, setChave] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        if (chave == 'PIUprova') {
            document.body.style.backgroundColor = randomColor;
        }
    }
        
    return(
        <div>
            <div className="div_login">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login">Login do Usuário</label>
                    <br></br>
                    <input type="text" name='login' onChange={(e) => setLogin(e.target.value)} value={login} placeholder="Login"/>
                    <br></br>
                    <label htmlFor="chave">Palavra Chave</label>
                    <br></br>
                    <input type="text" name='chave' onChange={(e) => setChave(e.target.value)} value={chave} placeholder="Chave"/>
                    <br></br>
                    <input className="bt_submit" type="submit" value='Enviar'/>
                </form>

            </div>
        
        </div>
    )
        

    
}