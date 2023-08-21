
import {useEffect, useState,} from 'react'


 interface Data{
    title:string,
    options:string,
    textArea:string,
    hours:number,
    minute:number
 }


export default function ListTask({title,options,textArea}:any){

  
  
   const ObjData:Data ={
    title:title,
    options:options,
    textArea:textArea,
    hours: new Date().getHours(),
    minute: new Date().getMinutes()
   }
   const[dataTaks,setDataTaks] = useState<Data[]>([])
  
   useEffect(()=>{
    /**
     * Como já tem uma verificação de caso algum campo esteja em branco,ele não 
     * tem a necessidade de verifica todos os atributos do objeto, e sim só um caso
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
           {dataTaks.length >=1? dataTaks && dataTaks.map((value,index)=> { return(
                <li  key={index}> Tarefa:{index},Titulo:{value.title},Descrição:{value.textArea},Categoria:{value.options} <time>Horas:{value.hours}:{value.minute}</time> 
                <input type="checkbox" name="checkTaks"  /> </li>
            )} ):<li>Lista vazia</li> }
        </div>
       
        
    </div>
)
}