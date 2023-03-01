export const GET_CHARACTER = "GET_CHARACTER";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER_CHARACTER = "FILTER_CHARACTER";

export function getCharacter() {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_CHARACTER, payload: data.results }));
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

export function getDetail(id){
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DETAIL, payload: data}));
  };


}

export function addFavorite(data){
  return{
    type:ADD_FAVORITE,payload:data
  }
}
export function deleteFavorite(id){
  return{
    type:DELETE_FAVORITE,payload:id
  }
}

export function filterCards(genero){

  return {type:FILTER_CHARACTER,payload:genero}
}
