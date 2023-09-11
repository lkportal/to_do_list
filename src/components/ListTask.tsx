import {DivConteiner} from './ListTaskStyle'
import {useEffect, useState,} from 'react'


 interface Data{
    title:string,
    options:string,
    textArea:string,
 
 }


export default function ListTask({title,options,textArea}:any){
 const[concluida,setConcluida] = useState<boolean>(false)
  
  
   const ObjData:Data ={
    title:title,
    options:options,
    textArea:textArea,
   
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
        
        <DivConteiner>
           {dataTaks.length >=1 && dataTaks.length <=4? dataTaks && dataTaks.map((value,index)=> { return(
                <ul>
                   
                    <li  key={index}>Tarefa:{index}</li>
                    <li>Titulo:{value.title}</li>
                    <li>Descrição:{value.textArea}</li>
                    <li>Categoria:{value.options.toUpperCase()}</li> 
                </ul>)} ):<h1>Lista Vazia</h1>}
            
             
        </DivConteiner>
        <div>
        
        </div>
       
        
    </div>
)
}