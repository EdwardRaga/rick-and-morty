const express = require("express");
const router = express.Router();
const favs = require('../utils/favs').favs

const getCharDetail = require("../controllers/getCharDetail");
//agregar favoritos
const postFav = require("../controllers/postFav");
//obtener favoritos
const getFavs = require("../controllers/getFavs");
//eliminar personaje
const deleteFav = require("../controllers/deleteFav");

//Get al characters and favorites
router.get("/rickandmorty/characters", async(req,res) => {
    try {
       const response = await  fetch(`https://rickandmortyapi.com/api/character`);
       const characters = await response.json()
        res.status(200).json({characters, favs});
    }catch(e){
        res.status(404).json({err: e.messagge})
    }
});

//recibe id personaje
router.get("/rickandmorty/detail/:id", getCharDetail);

//recibe un personaje por req.body. A este personaje lo deberás pushear dentro de este arreglo.
router.post("/rickandmorty/fav", postFav);

//fav, la cual debe obtener todos los personajes guardados en el arreglo favs.
router.get("/rickandmorty/fav", getFavs);

//que elimine el personaje en el arreglo fav a partir del id que recibe por parámetro.
router.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = router;
