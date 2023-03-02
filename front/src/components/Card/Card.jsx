import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  deleteCharacter,
  addFavorite,
  deleteFavorite,
} from "../../redux/action";
import { Link } from "react-router-dom";
import validate from "./validateFavorite";
import style from "../Card/Card.module.css";

const CardsWraper = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  text-align: center;
  box-shadow: 10px 10px rgba(245, 245, 245, 0.3);
  border-radius: 7px;
  background-color: #f5f5f5;
`;

const Name = styled.h2`
  color: white;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 20px;
  margin-top: -45px;
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
  font-size: 20px;
  border: none;
  border-radius:3px;
  background-color: rgba(0, 0, 0, 0.1);

 &:hover {
  cursor:pointer;
  }

  `;

const Card = ({
  name,
  status,
  species,
  gender,
  image,
  id,
  deleteCharacter,
  addFavorite,
  deleteFavorite,
  state,
}) => {
  //estados de favoritos
  let [myFav, setFav] = useState(state);
  //estado vericacion de favoritos
  let [inFav, setInFav] = useState();

  //favoritos
  //escucha el estado
  useEffect(() => {
    setFav(state);
  }, [state]);

  //verica si esta en favoritos
  useEffect(() => {
    setInFav(validate(id, myFav));
  });

  // agregar a favoritos
  const handleFavorite = (event) => {
    addFavorite({
      name,
      image,
      id,
      gender
    });
  };

  //eliminar favorito
  const handleDeleteFavorite = () => {
    deleteFavorite(id);
  };

  //eliminar personaje
  const handleClick = () => {
    deleteCharacter(id);
    deleteFavorite(id);
  };

  return (
    <CardsWraper>
      <div className={style.wraperButton}>
        <NavButton onClick={handleClick}>🖤</NavButton>
        {!inFav ? (
          <NavButton onClick={handleFavorite}>💜</NavButton>
        ) : (
          <NavButton onClick={handleDeleteFavorite}>❤️</NavButton>
        )}
      </div>

      <Link to={`detail/${id}`}>
        <CardImage src={image} alt={name} />
      </Link>
      <Name>{name}</Name>
      <h3>{id}</h3>
    </CardsWraper>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
    addFavorite: (data) => dispatch(addFavorite(data)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
