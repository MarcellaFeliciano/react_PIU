
import Tema from './componentes/Tema'
import Galeria from './componentes/Galeria'
import './App.css'

import amigas from "./assets/amigas.png"
import bests from "./assets/bests.png"
import evelyn_popo from "./assets/evelyn_popo.png"
import iuri from "./assets/iuri.png"
import marcella_kekel from "./assets/marcella_kekel.png"
import popo from "./assets/popo.png"

const informacoes = [
  {
    id:1,
    name: "Amigas",
    description: "Amigas na EXPOTEC",
    image: amigas
  },
  {
    id:2,
    name: "Bests",
    description: "Best friends forever <3",
    image: bests
  },
  {
    id:3,
    name: "Evelyn e Poliana",
    description: "Evelyng e Popó na EXPOTEC",
    image: evelyn_popo
  },
  {
    id:4,
    name: "Iuri",
    description: "Professor Iuri Redes",
    image: iuri
  },
  {
    id:5,
    name: "Marcella e Ylanne",
    description: "Marella e Kekel na EXPOTEC",
    image: marcella_kekel
  },
  {
    id:6,
    name: "Popó",
    description: "Popó na Expotec",
    image:popo
  }
]

function App() {
  return (
    <>

      <Tema>
        <h1>Galeria da EXPOTEC</h1>
        <Galeria informacoes={informacoes} />
      </Tema>

    </>
  )
}

export default App
