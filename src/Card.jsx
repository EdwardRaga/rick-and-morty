import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteCharacter } from "./redux/action";
import { Link } from "react-router-dom";

const CardsWraper = styled.div`
  border: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  margin: 5px;
  border-radius: 7px;
  text-align: center;
  background-color: #f5f5f5;
  color: black;
`;

const CardImage = styled.img`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: -5px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavButton = styled.button`
  //estilos para el boton
  font-size:20px;
  padding: 10px 15px;
  border: none;
  background-color: #CD72FE;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 4px;
  color: white;
  
  &:hover {
    transition: background-color 0.4s;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    color: white;
`;

const Card = ({
  name,
  status,
  species,
  gender,
  image,
  id,
  deleteCharacter,
}) => {
  const handleClick = () => {
    deleteCharacter(id);
  };
  return (
    <CardsWraper>
      <NavButton onClick={handleClick}>Delete</NavButton>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <Link to={`detail/${id}`}>
        <CardImage src={image} alt={name} />
      </Link>
      <p>{id}</p>
    </CardsWraper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
