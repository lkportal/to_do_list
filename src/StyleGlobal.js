import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    ul{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border: solid 1px #693E7F;
    margin: 1rem;
    border-radius: 5%;
    background-image: linear-gradient(to left,#693E7F ,#9C659B);
    text-overflow: ellipsis;
    }
    li{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        color: #fff;
        grid-row: span 1;
        
    
        
    }
h1{
    font-size: 20px;
   
}

`