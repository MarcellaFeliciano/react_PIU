
// importações do css e dos componentes
import './App.css'
import Contador from './componentes/Contador'
import ListarCarros from './componentes/ListarCarros'

//importação do array de carros a partir do arquivo dados_carro.js
import {carros} from './componentes/dados_carro'

// componente "principal" App
function App() {

  return (
    <>
    <h2>Prova de PIU</h2>
    <h5>Questão 1</h5>
    <Contador/>

    <h5>Questão 2</h5>
    <ListarCarros carros={carros}/>
    </>
  )
}


// abilitando exportação do componente APP para quele possa ser importado no  main.jsx 
export default App
