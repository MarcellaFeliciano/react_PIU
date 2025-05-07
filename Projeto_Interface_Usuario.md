# Conteúdo de Interface de Usuário
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

#### App.jsx
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



###Index.html

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
