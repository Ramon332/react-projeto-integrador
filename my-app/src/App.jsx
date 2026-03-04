import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Botao from './componentes/Botao'


function App() {
  function mostrarMensagem(){
alert("Bem-vindo ao React!") }

function capturarTexto(Texto){
  console.log(Texto.target.value)
}

  return (
    <>
     <div>
        <h1>Minha primeira aula</h1>
        <Titulo />
        <Aluno />
        <Botao />
        <button onClick={mostrarMensagem}>Clique aqui</button>
        <br></br>
        <input type = "text" onChange={capturarTexto}></input>
        
     </div>
    </>
  )
}

export default App
