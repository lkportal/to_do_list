import { styled } from "styled-components";

const colorPurple = '#DE56FF'
export const FormConteiner = styled.form`
  padding: 1rem;
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: solid 2px #aaa;
    padding: 2rem 0;
  
`
export const ConteinerDivInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   
    padding: 2rem 0;
`
export const InputTitle = styled.input`
    margin: 1em 0;
    padding: 0.5em;
    &:focus{
        outline: none;
    }


`
export const OptionsDataDiv = styled.div`
     margin: 1em 0;
     align-self: flex-end;
     margin-right: 20px;
`
export const BtnSumit = styled.input`
    margin: 2em 0;
    color: '#000';
    background-color: ${colorPurple};
    border: none;
    padding: 1em 2em;
    border-radius: 5%;
   
`
export const TextArea = styled.textarea`
        width: 70%;
        height: 150px;
        padding: 5px;
        &:focus{
            outline: none;
        }

`