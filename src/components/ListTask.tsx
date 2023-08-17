
import {useEffect, useState, useRef} from 'react'
import   {useLocation,Link} from 'react-router-dom'
import { string } from 'yargs'
 interface Data{
    title:string,
    options:string,
    textArea:string
 }


export default function ListTask(){

  
     let {state} = useLocation()
   const ObjData:Data ={
    title:state.title,
    options:state.options,
    textArea:state.textArea
   }
   const[dataTaks,setDataTaks] = useState([ObjData])
  
   useEffect(()=>{
    function Dtsfecth(){
        setDataTaks([...dataTaks])
         
    }
    Dtsfecth()
 console.log()
   },[])



return(
    <div>
        <Link to='/' >Volta</Link>
        <div>
            {dataTaks && dataTaks.map((value,index)=> { return(
                <li  key={index}> Tarefa:{index},Titulo:{value.title},Descrição:{value.textArea},Categoria:{value.options}  </li>
            )} )}
        </div>
        <div>
            {}
        </div>
        
    </div>
)
}