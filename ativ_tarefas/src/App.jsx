
import './App.css'
import { lista_tarefas } from './componentes/dados'
import Tema from "./componentes/Tema"
import Dashboard from "./componentes/Dashboard"


function App() {
  
  return (
    <>
      <h2>oi</h2>
      <Tema>
        <Dashboard tarefas={lista_tarefas}/>
      </Tema>
      
    </>
  )
}

export default App
