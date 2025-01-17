import './App.css'
import Titulo from './Components/Titulo'
import Placeholder from './Components/placeholder'

const App = () => {
  return (
    <>
      <Titulo 
        nome={'react'} 
        descricao={'Seja Bem vindo'} 
        data={'01/02/2025'} 
      >
        <Placeholder/>
      </Titulo>

      <Titulo 
        nome={'TypeScript'} 
        data={'03/02/2025'}/>
      {/* <h1>Aula 02 Revisão</h1> */}
    </>
  )
}

// function App() {
//   return (
//     <>
//       <h1>Aula 02 Revisão</h1>
//     </>
//   )
// }

export default App
