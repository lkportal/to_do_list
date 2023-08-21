import { styled } from "styled-components";

const colorPurple = '#DE56FF'
export const FormConteiner = styled.form`
  padding: 1rem;
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`
export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    &,input, textarea{
        padding: 0.5rem;
        background-color: #EDCAFF;
        
    } input{
        border: solid 0.5px #000;
        margin-bottom: 0.5rem;
        border-radius: 2%;
    } textarea{
        border: solid 0.5px #000;
        border-radius: 5%;
    } textarea:focus,input:focus{
        outline: none;
        border: 0.5px solid #D37DFF;
        background-color: #D37DFF;
    }
`
export const DivSections = styled.div`
    flex-direction: row;
    margin-top: 1rem;

`
export const BTN = styled.input`
    margin-top: 1rem;
    width: 75px;
    background-color: #EDCAFF ;
    border: none;
    padding: 0.5rem 1rem;
    &:hover{
        cursor: pointer;
        background-color: #D37DFF;
    }

`