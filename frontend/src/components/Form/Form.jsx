import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addCharacter, getDetail } from "../../redux/action";
import styled from "styled-components";
import { useEffect } from "react";

const FormWrapper = styled.form`
  display: flex;
  font-family: "Arial";
  font-size: 18px;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
  margin: 70px auto;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  box-shadow: 0px 0px 10px #ccc;
`;

const StyledInput = styled.input`
  background-color: balck;
  border: 1px solid #ddd;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #3e3180;
    box-shadow: 0 0 8px #3e3180;
  }
`;

const SingButton = styled.button`
border: 1px solid #ddd;
padding: 12px 20px;
font-size: 18px;
border-radius: 4px;
margin-top:20px;
border-radius: 5px;

&:hover {
  transition: background-color 0.4s;
  background-color: #449D44;
  color: white;
`;

const Error = styled.p`
  margin-top:20px;
  color: #BB2124;
`;
const Sucess = styled.p`
  margin-top: 20px;
  padding:px;
  color: #22BB33;
`;

function Form({ add, get, detail, character }) {
  //estado de los campos del formulario
  const [input, setInput] = useState({
    id: "",
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
  });

  const [error, setError] = useState({
    id: "",
  });

  const [sucess,setSucess] = useState({sucess:''})
  //--------------------

  useEffect(() => {
    if (input.id) {
      get(input.id);
    }
  }, [input.id]);

  useEffect(() => {
    setInput({
      ...input,
      name: detail.name || "",
      status: detail.status || "",
      species: detail.species || "",
      gender: detail.gender || "",
      image: detail.image || "",
    });
  }, [detail]);
  
  //-------------------------------

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target.name;
    const value = event.target.value;
    let verifation = character.filter((ele) => ele.id == value);

    setSucess({...sucess,
      sucess:''})

    if (!value.length) {
      setError({ id: "please enter a id" });
         
    } else if (value <= 0) {
      setError({ id: "please enter a number greater than 0" });
    } else if (value >= 827) {
      setError({ id: "please enter an id less than 827" });
    } else if (value > 0 && value <= 826) {
      {
        verifation.length == 1
          ? setError({ id: "character is already added" })
          : setError({ id: "" });
      }
    }
    if(value > 0){
      setInput({
        ...input,
        [target]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    const value = event.target.id.value;


    if(!value.length){
      console.log('No se puede');
      setError({
        id: 'please enter a id'
      })
    }
    
    else if(!error.id){
      
      console.log('Se agrego');
      console.log(input);
      
        
        add(input);
        setInput({
          ...input,
          id: "",
          name: "",
          status: "",
          species: "",
          gender: "",
          image: "",
        })
  
        setError({ id: "Do you want add new character?" })
        setSucess({...sucess,
          sucess:'The character was added successfully'})
      }
    }
  

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <br />
      <label htmlFor="">ID character</label>
      <StyledInput
        type="number"
        key="id"
        name="id"
        placeholder="waiting id"
        onChange={handleChange}
      />
      {error.id && <Error>{error.id}</Error>}
      <br />
      <label htmlFor="">Name</label>
      <StyledInput
        placeholder="Loading name.."
        type="text"
        key="name"
        name="name"
        value={input.name}
        disabled={true}
      />
      <br />
      <label htmlFor="">Status</label>
      <StyledInput
        type="text"
        placeholder="Loading status.."
        key="status"
        name="status"
        value={input.status}
        disabled={true}
      />
      {/* {
        error.status && <strong>{error.status}</strong>
      } */}
      <br />
      <label htmlFor="">Species</label>
      <StyledInput
        placeholder="Loading specie.."
        type="text"
        key="species"
        name="species"
        value={input.species}
        disabled={true}
      />
      {/* {
        error.species && <strong>{error.species}</strong>
      } */}
      <br />
      <label htmlFor="">Gender</label>
      <StyledInput
        type="text"
        key="gender"
        placeholder="Loading gender.."
        name="gender"
        value={input.gender}
        disabled={true}
      />
      {/* {
            error.gender && <strong>{error.gender}</strong>
          } */}

      {/* <SingButton type="submit">Registrar</SingButton> */}

      {!error.id ? <SingButton type="submit">Add Character</SingButton> : null}
      {sucess.sucess && <Sucess>{sucess.sucess}</Sucess>}
      
    </FormWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
    character: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: (id) => dispatch(getDetail(id)),
    add: (input) => dispatch(addCharacter(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
