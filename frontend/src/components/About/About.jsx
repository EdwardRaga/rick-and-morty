import styled from "styled-components";
import styleds from "../About/About.module.css";

const DivWrapper = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 5px;
  justify-content: center;
`;

const DivImage = styled.div`
  display: flex;
  justify-self: flex-start;
`;

const DivInfo = styled.div`
  width: 100%;
`;
const Section = styled.section`
  border-radius: 5px;

  background-color: rgba(245, 245, 245, 0.1);
  padding: 18px;
`;
const P = styled.p`
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

export default function About() {
  return (
    <DivWrapper className={styleds.wrapper}>
      <DivImage>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
          alt=""
        />
      </DivImage>
      <DivInfo>
        <Section>
          <P>Character: Edward Raga</P>
          <P>
            Location:{" "}
            <a
              href="https://www.linkedin.com/in/edwardragadev/"
              target={"_blank"}
            >
              Planet Linkedin
            </a>
            .
          </P>
          <P>
            Origen:{" "}
            <a href="https://github.com/EdwardRaga" target={"_blank"}>
              GitHub Dimension
            </a>
          </P>
          <P>
            <strong>Status:</strong> Full Stack Web Developer
          </P>
          <P>
            <strong>Specie:</strong> Informatics Engineer
          </P>
        </Section>
      </DivInfo>
    </DivWrapper>
  );
}
