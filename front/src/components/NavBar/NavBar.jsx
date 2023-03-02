import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styledNav from "../NavBar/NavBar.module.css";

const NavButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #f5f5f5;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <div className={styledNav.wrapper}>
        <div className={styledNav.linkNav}>
        <div>
        <Link to="/">
            <NavButton>Log out</NavButton>
          </Link>
        </div>
     <div>
     <Link to="/home">
            <NavButton>Home</NavButton>
          </Link>
          <Link to="/favorites">
            <NavButton>Favorites</NavButton>
          </Link>
          <Link to="/form">
            <NavButton>Add character</NavButton>
          </Link>
          <Link to="/about">
            <NavButton>About</NavButton>
          </Link>
     </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
