//ESTA FUNCION SE ENCARGA DE BUSCAR PERSONAJE POR ID
//DEBIDO A QUE YA ESTOY HACIENDO ESO EN EL FORM REUTILICE CODIGO
//LA MISMA FUNCION DE getCharDetail ya que es la misma que se ejecuta cuando ingreso un id en el Form

// const getCharDetail = (res,id)=>{

        
//         fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.json())
//         .then(data=>{
//             let {id,name,status,species,gender,image} = data;
//             characters = {id,name,status,species,gender,image};
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(JSON.stringify(characters))
//         })
//         .catch(error => {
//             res.writeHead(500,{"Content-Type": "text/plain"});
//             res.end(new Error(error))
//         })

   
// }