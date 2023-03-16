const express = require('express');
const router = express.Router();

const getCharDetail = require('../controllers/getCharDetail')
//agregar favoritos
const postFav = require('../controllers/postFav');
//obtener favoritos
const getFavs = require('../controllers/getFavs')
//eliminar personaje
const deleteFav = require('../controllers/deleteFav')


//recibe id personaje 
router.get('/rickandmorty/detail/:id',getCharDetail)

//recibe un personaje por req.body. A este personaje lo deberás pushear dentro de este arreglo.
router.post('/rickandmorty/fav',postFav)

//fav, la cual debe obtener todos los personajes guardados en el arreglo favs.
router.get('/rickandmorty/fav',getFavs)

//que elimine el personaje en el arreglo fav a partir del id que recibe por parámetro.
router.delete('/rickandmorty/fav/:id',deleteFav)

module.exports = router;
