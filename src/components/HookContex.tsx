import {  createContext } from "react";


export const cretaeuseContex = createContext('');

export default function ContextData({children}:any){
interface Dados{
    title:string,
    options:string,
    textArea:string
}

    return(
        <cretaeuseContex.Provider value={''}>
                {children}
        </cretaeuseContex.Provider>
    )

}