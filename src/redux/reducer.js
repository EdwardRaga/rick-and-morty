import { GET_CHARACTER } from "./action";
import { DELETE_CHARACTER } from "./action";
import { ADD_CHARACTER } from "./action";
import { GET_DETAIL } from "./action";


  
const initalState = {
  character: [],
  myCharacter:[],
  detail: {},
};

function rooReducer(state = initalState, actions) {
  switch (actions.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: actions.payload.concat(state.myCharacter)
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        character: state.character.filter(
          (char) => char.id !== actions.payload
        ),
        myCharacter: state.myCharacter.filter((char)=> char.id !== actions.payload),
      };
    case ADD_CHARACTER:
      return {
        ...state,
        myCharacter:[...state.myCharacter,actions.payload]
      };

      case GET_DETAIL:
        return{
          ...state,
          detail: actions.payload
        }
    default:
      return {
        ...state,
      };
  }
}
export default rooReducer;
