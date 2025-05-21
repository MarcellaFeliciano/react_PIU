# Conteúdo de Interface de Usuário
#### Projeto => npm create vite@latest - nome do projeto  - react - javascript - cd nome do projeto - npm install (PROJETO CRIADO) - (abrir o projeto no vscode) - npm run dev - aparecer

### Conteúdo 
```jsx
hooks - próprios do react
 - useState
import { useState } from "react"
//variavel valor e a função que vai manipular ela é a setValor / recebe como valor inicializado pelo valor 0
let [valor, setValor] = useState(0)

```
## Observações
```

ativ - ver a doccumentação oficial - quick start até a proxima semana
donwload node js - ode -v - comand prompt (prompt do windowss) + npm -v
react spa - simple page aplication - 

criar projetos toda aula / aprender os comando basicos de react / fluxo de trablaho / adicionar no repositório

create-react app
nps

-> npm create vite@latest - criar um proheto vite

nome do projeto  - react - javascript - cd nome do projeto - npm install (PROJETO CRIADO) - (abrir o projeto no vscode) 

-> npm run dev - aparecer

monitorar o comprotamento do usuario na pagina

dom - estrutura da pagina web ( toda vida que a pagina é recarregada a estrutira é recriada)

criar um dom virtual, o react atualiza apenas o elemento que precisa e não a pagina inteira

node_modules - dependencias para rodar o projeto  - está dentro do gitignore - 
public = em teoria é reservado para arquivos estativos - não é muito utilizado na pratica
src = static

index.html = o react vai pegar a div e adiconar os elementos/projeto nesse conteiner
script = /src/main.jsx - type modelu? 


main.jsx - arquivo principal

importação de pacotes - do react e react-dom

createRoot=vai processar o react
 resgata o elemento e indica que nele será adiconado os componentes
 render - metodo para renderizar
 stricmode - nos ajudar com a programação

 <App /> = é um componente - modularizar a intercade - reutilização de elementos
 - parece uma tag html porem não é


 bloco de importações

 função App - mesmo de escopo de declaraçẽos do js

 declarar funçoes internas

 return = quando chamar o compodennete app ele retrona a estritira 

 estrutura - jsx - sintaxe de utilização do react - html e js simutaneamente
 return (
    <>
    </>
 )

 -> TODO COMPODENTE COMEÇA COM A LETRA MAISCULA - isso diferencia uma tag de um componente -


 elementos entre chaves = elemenntos js (variaveis, funções, operações)
 todo return tem que estar encapsulado em uma tag - estrutura de container
  - desfragmentação - usar a tag vazia <> = encapsula
  props

  className - reserva o nome para dar a classe css

os elementos são mostrados na pagina com elementos html - string

para aparecer na tela = cria o componente - export default nome do componenete -  adiciona o componnete = <MyFirstComponent/> no arquivo jsx
-> não é recomendado chamar os elementos no main.jsx - por padrão aduiciona os componentes no app.jsx

hierarqui ade componnetes - posso ter componentes dentro de componentes - o App é o principal

sintaxe de funções de js !
tentar minimizar , trabalhar com eventos



FUNÇÃO MAP
FUNÇÃO FILTER

PROVA
- APRENDER GIT
- HTML / CSS / JS

PROPOSTA - USAR DERRAMENTAS VISTAS
CLICAER NO PERSONAGEM - APARECER NA TELA GRANDE, BONITINHO (VISUAIZAÇÃO) / POEGAR IMAGENS /
VISUALIZAR PERSONAGENS
VISUALIZAR O SELECIONADO
DARK MODE E LIGHT MODE

COMPONETE EXTERNO
COMPONENTE CENRAR
COMPONENETE QUE DEPENDE DE OUTRO
COMOPONENTE BOTÇÃO
------


```


### main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyfirstComponent from './MyFirstComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyfirstComponent/>
  </StrictMode>,
)
```

#### MyFirstComponent.jsx
```jsx
function MyfirstComponent(){
    const nome = "Marcella"

    return(
        <>
        <div>
            <h1>Hello World</h1>
        </div>
        <div>
            <p>Seu nom é {nome} </p>
            <p>a soma de 2+2 é {2+2}</p> 
        </div>
        </>
    )
}

export default MyfirstComponent
```
#### App.jsx
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyfirstComponent from './MyFirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyfirstComponent/>
    </>
  )
}

export default App

```

### Index.html
```jsx
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
import "./Header.css"



function Header(){
    const title = "Programação Orientada a Serviço"

    function Clicar(){
            let texto = document.getElementById("aula")
            texto.innerHTML = "Aula 2 de React"
            
        }
 
    return (
        <>
        <div className="header">
            <h3>{title}</h3>
            <div className="nav">
                <button onClick={Clicar}>Aulas de PIU</button>
            </div>
        </div>
        <div>
            <h5 id="aula"></h5>
        </div>
        </>
    )
}
export default Header

import "./Escopo.css"

function Escopo(){
    const label = 'Clique aqui!'
    // função interna 
    function handleClick(){
        return(
            alert("alerta")
        )
    }
    return(
        <>
        <div>

            <h2>Teste de componentes</h2>
            </div>
        <div>
            <button onClick={()=>console.log("Você clicou aqui")} >{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
        
    )
}

export default Escopo
