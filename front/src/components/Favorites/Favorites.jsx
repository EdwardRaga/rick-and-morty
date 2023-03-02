import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Favorites/Favorites.module.css";
import styled from "styled-components";
import Card from "../Card/Card";
import { filterCards, orderAscending } from "../../redux/action";
import { bubbleOrder } from "./orderCharacter";


export default function Favorites() {
  let state = useSelector((state) => state.charcterFilter);
  const dispatch = useDispatch()


  const handleChangeOrder = (event)=>{
    dispatch(orderAscending(bubbleOrder(event.target.value,state)))
  }


  const handleChangeFilter = (event)=>{
    const genero = event.target.value;
    dispatch(filterCards(genero))
  }

  return (
    <>
  <div className={style.filter}>
        <select onChange={handleChangeFilter}  name="select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="" selected disabled hidden>Filtred by gender</option>
          <option value="unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
        <select onChange={handleChangeOrder} name="select">
          <option value="" selected disabled hidden>ascending/decent</option>
          <option value="ascending">ascending order</option>
          <option value="decent">decent order</option>
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
