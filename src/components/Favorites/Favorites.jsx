import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Favorites/Favorites.module.css";
import styled from "styled-components";
import Card from "../Card/Card";
import { filterCards } from "../../redux/action";

export default function Favorites() {
  let state = useSelector((state) => state.charcterFilter);
  const dispatch = useDispatch()



  const handleChange = (event)=>{
    const genero = event.target.value;
    console.log(genero);
    dispatch(filterCards(genero))

  }

  return (
    <>
  <div className={style.filter}>



        <select onChange={handleChange}  name="select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="" selected disabled hidden>Filtred by gender</option>
          <option value="unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>

    <div className={style.wrapper}>

      {state.map((character) => {
        return (
          <Card
            name={character.name}
            id={character.id}
            image={character.image}
          
          />
        );
      })}
    </div>
  
  </>
  )
  
  
      
}
