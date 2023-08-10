import { FormConteiner,ConteinerDiv,InputTitle,OptionsDataDiv,BtnSumit,TextArea } from "./LayoutStyle"
import { useState } from "react"
import ListTask from "./ListTask"


export default function Layout():any{

const[options,setOptions]= useState('') 
const[title,settitle] = useState('')
const[textArea,settextArea] = useState('')
    
 function sendData(e:any){
    
     settitle(e.target.value)
    console.log(title,'title')
 }

return(
 
     <FormConteiner onClick={sendData}>
             
            <ConteinerDiv>
            <InputTitle placeholder="Titulo" />

                <OptionsDataDiv>
                <select name="category" id="" onChange={(e) => setOptions(e.target.value)} >
                    <option  value="Estudos">estudar</option>
                    <option value="Tarefas">tarefas</option>
                    <option value="Compras">compras</option>
                    <option value="Outros">outros</option>
                </select>

              
                </OptionsDataDiv>

                <TextArea name="descrition" id="" cols={10} rows={5} placeholder="Descrição" onChange={(e) => settextArea(e.target.value)}/>

                <BtnSumit type="submit" value='Send' />
            </ConteinerDiv>
          

     </FormConteiner>
 
)
}