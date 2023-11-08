import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik"; 

export const FormStyle = styled(Form)`
display: flex;
flex-direction: column;
gap: 25px;
align-items: center;
border-bottom: 2px solid black;
padding-bottom: 15px;
`
export const InputField = styled(Field)`
width: 400px;
height: 40px;
`
export const Error = styled(ErrorMessage)`
margin-top: 10px;
color: red;
font-weight: 600;
`
export const AddBtn = styled.button`
display: block;
width: 200px;
height: 50px;
background-color: white;
color: green;
font-weight:800;
`
