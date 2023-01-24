import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 145px;
  font-size: 14px;
  margin-top:50px;
`;

const FooterButton = styled.button`
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
  background-color: black;
  color: white
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://github.com/EdwardRaga" target="_blank">
        <FooterButton>GitHub</FooterButton>
      </a>
      <a href="https://linkedin.com/EdwardRaga" target="_blank">
        <FooterButton>LinkedIn</FooterButton>
      </a>
    </FooterWrapper>
  );
};

export default Footer;