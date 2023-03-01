import { GET_CHARACTER } from "./action";
import { DELETE_CHARACTER } from "./action";
import { ADD_CHARACTER } from "./action";
import { GET_DETAIL } from "./action";
import { ADD_FAVORITE } from "./action";
import { DELETE_FAVORITE } from "./action";
import { FILTER_CHARACTER } from "./action";


  
const initalState = {
  character: [],
  myCharacter:[],
  detail: {},
  myFavorites:[],
  charcterFilter:[]
};

function rooReducer(state = initalState, actions) {
  console.log(actions);
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
        character:[...state.character,actions.payload],
      };

      case GET_DETAIL:
        return{
          ...state,
          detail: actions.payload
        }
      case ADD_FAVORITE:
        return({
          ...state,
          myFavorites:[...state.myFavorites,actions.payload],
          charcterFilter:[...state.myFavorites,actions.payload]
        })
      case DELETE_FAVORITE:
        return({
          ...state,
          myFavorites:[...state.myFavorites.filter((character) => character.id != actions.payload)]
        })

        case FILTER_CHARACTER:
          return(
            {
              ...state,
              charcterFilter:state.myFavorites.filter((char)=> char.gender === actions.payload),
              
              
            }
          )

      
    default:
      return {
        ...state,
      };
  }
}
export default rooReducer;
