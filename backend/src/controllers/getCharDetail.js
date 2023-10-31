//PROMESA CON EXPRESS
const favs = require('../utils/favs')
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req,res){
  
  try{
        //id params
    const params = req.params.id;
    //request a la ruta de la api RaM
     const request = await fetch(`${URL}${params}`);
     //convertir la respuesta json a objeto
     const data = await request.json();
     //setear la data que necesito
     const character = {
      id: data.id,
      name:data.name,
      status:data.status,
      gender:data.gender,
      species:data.species,
      image:data.image,
      location:{
        name:data.location.name
      },
      origin:{
        name:data.origin.name,
      },
      type:data.type,
     }
     //enviarla a mi servidor para que le llegue una respuesta a la request
     res.send(character)
  }catch(e){
     res.status(500)
     res.send({ message: `Error al obtener personaje por ID: ${e}` });
  }
}

// const getCharDetail = (req,res)=>{
//       const params = req.params;
//     fetch(`${URL}${params.id}`)
//     .then((response)=> response.json())
//     .then((data) => {
//           if(data.id){
//             console.log('Personaje encontrado');
//               res.send(data);
//           }
//           else{
//             throw ("Personaje no encontrado");
//           }
//       })
//     .catch(error => {
//         console.error(`Error al obtener personaje por ID: ${error}`);
//         res.status(500)
//         res.send({ message: `Error al obtener personaje por ID: ${error}` });
//     }); 
    
// }










//PROMESA CON NODE PURO
//  const getCharById = (res,id)=>{
    
        
//         fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.json())
//         .then(data=>{
//             // let {id,name,status,species,gender,image} = data;
//             // characters = {id,name,status,species,gender,image};
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(JSON.stringify(data))
//         })
//         .catch(error => {
//             res.writeHead(500,{"Content-Type": "text/plain"});
//             res.end(new Error(error))
//         })

// }

module.exports = getCharDetail;