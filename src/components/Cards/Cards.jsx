import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacter } from "../../redux/action";
import Card from "../Card/Card";

const CardsWraper = styled.div`
display:flex;
margin-top:60px;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`;

class Cards extends Component {

  componentDidMount() {
    if (this.props.character.length === 0) {
      this.props.getCharacter();
    }
  }

  render() {
    return (
      <CardsWraper>
       {this.props.character.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
          />
        ))}
      </CardsWraper>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: () => dispatch(getCharacter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
