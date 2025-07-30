
import './App.css'
import TemaEffect from './componentes/TemaEffect'
import InputEffect from './componentes/InputEffect'
import TelaLogin from './componentes/TelaLogin'
import ListarAPI from './componentes/ListarAPI'
import EnviarDados from './componentes/EnviarDados'
function App() {
  
  return (
    <>
      <div className='conteudo'>

        <TemaEffect/>
        <InputEffect/> 
        <hr></hr> 
        <TelaLogin/>
        <hr></hr>
        <ListarAPI/>

        <EnviarDados/>
      </div>
      
    </>
  )
}

export default App
