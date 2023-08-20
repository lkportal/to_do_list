
import {useEffect, useState,} from 'react'


 interface Data{
    title:string,
    options:string,
    textArea:string
 }


export default function ListTask({title,options,textArea}:any){

  
  
   const ObjData:Data ={
    title:title,
    options:options,
    textArea:textArea
   }
   const[dataTaks,setDataTaks] = useState<Data[]>([])
  
   useEffect(()=>{
    /**
     * Como já tem uma verificação de caso algum campo esteja em branco,ele não 
     * tem a necessidade de verifica todos os atributos do objeto e sim, só um caso
     * a entrada estejá vazia, e não mostrando os valores indefinidos.  
     */ 
    
    function Dtsfecth(){
        if(ObjData.title !==''){
            
            setDataTaks([...dataTaks,ObjData])
        }
         
    }
    Dtsfecth()
 
   },[title,options,textArea])



return(
    <div>
        
        <div>
           {dataTaks.length >1? dataTaks && dataTaks.map((value,index)=> { return(
                <li  key={index}> Tarefa:{index},Titulo:{value.title},Descrição:{value.textArea},Categoria:{value.options}  </li>
            )} ):<li>Lista vazia</li> }
        </div>
       
        
    </div>
)
}