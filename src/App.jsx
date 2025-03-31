import { useState } from "react"

function App(){

  

  const Formulario = (props) => {

    const [nome, setNome] = useState('Ronaldo')

   return (  
   <div> 
    <h3>{props.titulo}</h3>
    <input className="nome" 
  placeholder="Digite seu nome..."
  onChange={(e)=>{setNome(e.target.value)}}
  name="nome"
  type="text" />
<button className="botao" onClick={
  ()=> {
    if(nome.leght > 0)
      alert (nome)
    else
    alert(props.mensagem)}
  }>

    CLIQUE AQUI
</button>  
   </div>
   )
  }

  return (
    <div>
      <h3> Pizzaria 2B</h3>
<Formulario  titulo = "Nome" menssagem = "sardinmha"/>
<Formulario titulo = "E-mail" mensagem = "curintia" />
<Formulario titulo = "CPF" mensagem = "porcada" />
<Formulario />

    </div>
  )
}

export default App

