
import {useState} from 'react'

interface Formdata{
    title:string,
    options:string,
    textArea:string
}
export default function ListTask({title,options,textArea}:any){

    const[data]= useState<Formdata>({title,options,textArea})



    return(
        <div>
            <ul>
                <li><strong>Titulo:</strong>{data.title}</li>
                <li><strong>Descrição:</strong>{data.textArea}</li>
                <li><strong>Categoria:</strong>{data.options}</li>
            </ul>
        </div>
    )
}