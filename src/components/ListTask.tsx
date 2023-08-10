
interface ListTalksParametro{
    title?:string,
    options?:string,
    textArea?:string
}

export default function ListTask({title,options,textArea}:ListTalksParametro){
    console.log(title,options,textArea)
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>{options}</p>
                  <span>{textArea}</span>  
            </div>
        </div>
    )
}