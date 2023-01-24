export const GET_CHARACTER = "GET_CHARACTER";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_DETAIL = "GET_DETAIL"

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
