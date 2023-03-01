
export function validation(input){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let error = {}
    if(!regexEmail.test(input.username)){
        error.username = "el nombre de usuario tiene que ser un email";
    }
    if(!input.username){
        error.username = "el nombre de usuario no puede estar vacío";

    }
    if(!input.username.length > 35){
        error.username = "el nombre de usuario no puede tener más de 35 caracteres";

    }

    if (!/\d/.test(input.password)) {
        error.password = "la contraseña tiene que tener al menos un número."

    }
    if (input.password.length > 10  || input.password.length < 6){
        error.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    }
    return error;
}