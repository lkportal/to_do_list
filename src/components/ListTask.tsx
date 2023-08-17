
import {useEffect, useState} from 'react'
import   {useLocation,Link} from 'react-router-dom'
 interface Data{
    title:string,
    options:string,
    textArea:string
 }


export default function ListTask({title,options,textArea}:any){

     let {state} = useLocation()
   const ObjData:Data ={
    title:state.title,
    options:state.options,
    textArea:state.textArea
   }
   const[dataTaks,setDataTaks] = useState([ObjData])
   
   useEffect(()=>{
    function Dtsfecth(){
        setDataTaks([...dataTaks,ObjData])
      
    }
    Dtsfecth()
 console.log(dataTaks[1])
   },[title,options,textArea])

  const handleDel = () =>{
    dataTaks.pop()
  }

return(
    <div>
        <Link to='/' >Volta</Link>
        <div>
            {dataTaks && dataTaks.map((value,index)=> { return(
                <li  key={index}>{value.title} {value.textArea} {value.options} <button onClick={handleDel}>X</button></li>
            )} )}
        </div>
        
    </div>
)
}