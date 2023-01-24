import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imagen from "../src/img/rickmorty_logo.png";

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  font-size: 30px;
  color:#CD72FE;
  margin-bottom:111px;

`;

const NavButton = styled.button`
  //estilos para el boton
  color: black;
  background-color: white;
  font-size:20px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-right: 4px;
  
  &:hover {
    transition: background-color 0.4s;
    background-color: #CD72FE;
    color: white;

`;

const CardImage = styled.img`
  width: 18%;
 
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavBarWrapper>
        <h1>Rick and Morty</h1>
        <div>
          <Link to="/">
            <NavButton>Home</NavButton>
          </Link>
          <Link to="/form">
            <NavButton>Add character</NavButton>
          </Link>
        </div>
      </NavBarWrapper>
    );
  }
}
export default NavBar;
