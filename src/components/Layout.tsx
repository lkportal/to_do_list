import { FormConteiner,ConteinerDivInput,InputTitle,OptionsDataDiv,BtnSumit,TextArea } from "./LayoutStyle"
import React, { useState,useEffect } from "react"
import ListTask from "./ListTask"
import {Link} from 'react-router-dom'



export default function Layout(){
 const[nameTitle,setnome] = useState<string>()
 const[selectTaks,setSelecTaks] = useState<string>()
 const[descricionTextArea,setDescricionTextArea] = useState<string>()
 //Enviando A partir do submite do formulario
 const[textArea,setTextArea] = useState<string>()
 const[taks,setTaks]= useState<string>()
 const[title,setTile] = useState<string>()

  function handleSubmit(event:React.FormEvent){
    event.preventDefault()
    setTile(nameTitle)
    setTaks(selectTaks)
    setTextArea(descricionTextArea)
    
  }
return(
 
    <div>
     <FormConteiner  onSubmit={handleSubmit}>
         <ConteinerDivInput>
          <input placeholder="escreve o titulo"  onChange={(e) => setnome( e.target.value)}/>
          <textarea onChange={(e) => setDescricionTextArea(e.target.value)} name="textDescricion"
           placeholder="Escreve Detalhes" cols={30} rows={10}></textarea>
         </ConteinerDivInput>
       <div>
       <select onChange={(e) => setSelecTaks(e.target.value)}>
            <option value="compra">Comprar</option>
            <option value="fazer">Fazer</option>
            <option value="estudar">Estudar</option>
            <option value="tarefa">Tarefa</option>
            <option value="outros">Outros</option>
        </select>
       </div>
        <input type="submit" value='go' name="title"/>
       
     </FormConteiner>
    
      <Link to='/tarefas' state={{title:title,options:taks,textArea:textArea}}>Tarefas</Link>
     
    </div>
 
)
}