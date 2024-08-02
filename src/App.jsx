import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, paddingLeft: '2rem', paddingRight: '2rem' }}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tecnico">Técnico</a>
            <ul>
              <li>
                <a href="#desenvolvimento-de-sistemas">Desenvolvimento de Sistemas</a>
              </li>
              <li>
                <a href="#modelagem-de-sistemas">Modelagem de Sistemas</a>
              </li>
              <li>
                <a href="#outras-materias">Outras Matérias</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#materias-escolares">Matérias Escolares</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Bem-vindo ao meu Portfólio!</h1>
      </div>
    </>
  )
}

export default App
