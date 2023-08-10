import { FormConteiner,ConteinerDiv,InputTitle,OptionsDataDiv,BtnSumit,TextArea } from "./LayoutStyle"
import { useState,useEffect } from "react"
import ListTask from "./ListTask"


export default function Layout():any{

const[options,setOptions]= useState('') 
const[title,settitle] = useState('')
const[textArea,settextArea] = useState('')
const[checkout,setCheckout] = useState(false)



useEffect(() =>{
  async  function show(){
        if(options !=='' && title !=='' && textArea !==''){
          await  setCheckout(true)
           } else{
            alert('Preencha os campos')
           }
    }
    show()
},[options,title,textArea])


function handleForm(event:React.FormEvent){
    event.preventDefault()
   
   
}    

return(
 
    <div>
         <FormConteiner onSubmit={handleForm}>
             
             <ConteinerDiv>
             <InputTitle placeholder="Titulo" onChange={(e) => settitle(e.target.value)}/>
 
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

                 <div>
                
             
                 </div>
             </ConteinerDiv>
           
 
      </FormConteiner>
      <div>
     {checkout &&  < ListTask title={title} options={options} textArea={textArea}/> }
      </div>
      
    </div>
 
)
}