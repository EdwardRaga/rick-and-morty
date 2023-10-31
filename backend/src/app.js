
const router = require('./routes/index')
const express = require('express');
require("dotenv").config()
const app = express();
const cors = require('cors');
const process = require("process");


// Agregar el middleware de CORS a todas las solicitudes
app.use(cors());

// Agregar el middleware de análisis de cuerpo JSON
app.use(express.json());

// Agregar el enrutador
app.use('/', router);


//***********************************
app.use(express.json())
//routas con router
app.use('/', router)



module.exports ={
  app,
}