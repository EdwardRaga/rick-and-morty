import axios from 'axios';
export const GET_CHARACTER = "GET_CHARACTER";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER_CHARACTER = "FILTER_CHARACTER";
export const ORDER_ASCENDING = "ORDER_ASCENDING";

export function getCharacter() {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_CHARACTER, payload: data.results}));
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
}

export function addCharacter(input) {
  return {
    type: ADD_CHARACTER,
    payload: input,
  };
}

export  function getDetail(id){
  return async function (dispatch) {
    try{
      //request a nuestro server
      await dispatch({type:GET_DETAIL,payload:{}})
      const response = await fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      //respuesta de nuestro server
      const data = await response.json();
      //despacho de data al reducer --> state gglobal
      dispatch({type:GET_DETAIL,payload:data})
    }
    catch(e){
      console.log(e);
  };
}
}

export function addFavorite(data) {
  return async function(dispatch) {
    try{
      //request a nuestro server
      const response = await axios.post('http://localhost:3001/rickandmorty/fav', data);
      //respuesta de nuestro server objeto con el personaje agregado
      //despacho de data al reducer --> state gglobal
      dispatch({type:ADD_FAVORITE, payload:response.data})


    }catch(e){
      console.log(e);

    }
    //CON PROMESAS
  //   axios.post('http://localhost:3001/rickandmorty/fav', data)
  //     .then(response => {
  //       console.log(response.data);
  //       dispatch({backend/src/server.js
  //         type: ADD_FAVORITE,
  //         payload: response.data,
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
}
}



// export function addFavorite(data) {
//   return function(dispatch) {
//     fetch('http://localhost:3001/rickandmorty/fav', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       dispatch({
//         type: ADD_FAVORITE,
//         payload: data
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   }
// }




// export function addFavorite(data){
//    return{
//     type:ADD_FAVORITE,payload:data
//   }
// }
export function deleteFavorite(id){
  return async function(dispatch){
    const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch({type:DELETE_FAVORITE, payload:response.data})
   
  }
}

export function filterCards(genero){

  return {type:FILTER_CHARACTER,payload:genero}
}

export function orderAscending(typeOrder){
  return{
    type:ORDER_ASCENDING, payload:typeOrder
  }
}