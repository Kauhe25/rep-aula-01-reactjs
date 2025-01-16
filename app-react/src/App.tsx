import './App.css'



function App() {

  const welcome = <h1>Seja bem vindo</h1>
  const curtindo = true;
  const numero = 6;
  const expressao = numero % 2 == 0? 'par' : 'impar';
  const cursos = ['html','css','js'];
  return (
    // React Fragment
    <>
      {/* Codigo Html */}
      <h1>Aula Revisão</h1>
      <h2>texto</h2>
      {welcome}
      <h2>Introdução ao React</h2>
      {curtindo ? 'Estou curtindo' : 'Não curti'}

      <h1 className={expressao}>
        {numero}</h1>

      {curtindo && <div><h2>Estou curtindo, toop</h2></div> }
    
      {/* Exemplo de iteração */}
      <p>{cursos.map((curso, posicao) => {
        return <p>{curso} - {posicao}</p>
      })}</p>
    </>
  )
}

export default App
