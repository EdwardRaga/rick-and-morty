import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addCharacter } from "./redux/action";
import styled from "styled-components";


const FormWrapper =  styled.form`
display:flex;
flex-direction:column;
justify-content: center;
background-color: #CD72FE;
padding: 20px;
margin: 0 auto;
font-size:20px;
font-family: 'Montserrat', sans-serif; /* nueva fuente */
border-radius: 10px;
width: 50%;
height:50%;
box-shadow: 0px 0px 10px #ccc;
`;

const StyledInput = styled.input`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px #4CAF50;
  }
`;


const SingButton = styled.button`
color: black;
background-color: white;
margin-top:20px;
font-size:20px;
border: none;
border-radius: 5px;
width: 20%;
align-self:flex-end;

font-family: 'Montserrat', sans-serif; /* nueva fuente */
&:hover {
  transition: background-color 0.4s;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);;
  color: white;
`;



const validate = (input)=>{
  let error = {};
  console.log(input);

  if(!input.name){
    error.name = "name required"
  }
  if(!input.status){
    error.status = "status required"
  }
  if(!input.species){
    error.species = "species required"
  }
  if(!input.gender){
    error.gender = "gender required"
  }

  return error;
}

function Form({ add, characters }) {
  let id = characters.length;
  const [input, setInput] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
  });

  let [error,setError] = useState({})

  const handleChange = (event) => {
    const target = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [target]: value,
    });
    let objError = validate({...input,[target]:value})
    setError(objError)
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    if(!input.name || input.species || input.gender || input.status){
      setError(validate(input))
      console.log(error);
    }
    if(input.name && input.species && input.gender && input.status){
      setInput({
        name: "",
        status: "",
        species: "",
        gender: "",
      });
      add({
        ...input,
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        id: id + 1,
      });
      alert("added character");
      
    }

  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <StyledInput
          type="text"
          key="name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        {
          error.name && <strong>{error.name}</strong>
        }
        <br />
        <label htmlFor="">Status</label>
        <StyledInput
          type="text"
          key="status"
          name="status"
          value={input.status}
          onChange={handleChange}
          />
          {
           error.status && <strong>{error.status}</strong>
          }
        <br />
        <label htmlFor="">Species</label>
        <StyledInput
          type="text"
          key="species"
          name="species"
          value={input.species}
          onChange={handleChange}
          />
          {
            error.species && <strong>{error.species}</strong>
          }
        <br />
        <label htmlFor="">Gender</label>
        <StyledInput
          type="text"
          key="gender"
          name="gender"
          value={input.gender}
          onChange={handleChange}
          />
          {
            error.gender && <strong>{error.gender}</strong>
          }

{Object.keys(error).length === 0 ? (<SingButton type="submit">Registrar</SingButton>): null}
{console.log(error)}
       
    </FormWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (input) => dispatch(addCharacter(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
