import { FormConteiner,DivInputs,DivSections,BTN} from "./LayoutStyle"
import React, { useState } from "react"
import ListTask from "./ListTask"




export default function Layout(){
 const[nameTitle,setnome] = useState<string>('')
 const[selectTaks,setSelecTaks] = useState<string>('')
 const[descricionTextArea,setDescricionTextArea] = useState<string>('')
 //Enviando A partir do submite do formulario
 const[textArea,setTextArea] = useState<string>('')
 const[taks,setTaks]= useState<string>('')
 const[title,setTile] = useState<string>('')

  function handleSubmit(event:React.FormEvent){
    event.preventDefault()
    if(nameTitle !== '' && selectTaks !== '' && descricionTextArea !== '' ){
      /**
       * Criei outros state para que não interfira na re-renderização do componente e sim que o dado
       * esteja pronto para se enviado para outro componente. 
       */

      setTile(nameTitle)
      setTaks(selectTaks)
      setTextArea(descricionTextArea)
      setnome('')
      setSelecTaks('')
      setDescricionTextArea('')
    }
    else{
      alert('Prencha os campos')
    }
  }
return(
 
    <div>
     <FormConteiner  onSubmit={handleSubmit}>
         <DivInputs>
          <input placeholder="Titulo"  onChange={(e) => setnome( e.target.value)}/>
          <textarea onChange={(e) => setDescricionTextArea(e.target.value)} name="textDescricion"
           placeholder="Descrição" cols={1} rows={10} maxLength={75} ></textarea>
         </DivInputs>
       <DivSections>
       <select  onChange={(e) => setSelecTaks(e.target.value)}>
            <option disabled={true} value='categoria'>Escolha a categoria</option>
            <option value="compra">Comprar</option>
            <option value="fazer">Fazer</option>
            <option value="estudar">Estudar</option>
            <option value="tarefa">Tarefa</option>
            <option value="outros">Outros</option>
        </select>
       </DivSections>
        <BTN type="submit" value='Envia' name="title"/>
      
     </FormConteiner>
     <ListTask title={title} options={taks} textArea={textArea} />
    
     
     
    </div>
 
)
}