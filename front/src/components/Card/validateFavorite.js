
function validate(id, myFavorites){
    return myFavorites.some((character) => character.id === id)
}   

export default validate;