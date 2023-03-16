// const getCharDetail = require('./controllers/getCharDetail')
// const router = require('./routes/index')
// const express = require('express');
// const cors = require('cors')
// const app = express();
const {app} = require('./app')
const PORT = 3001;

//acceso a los recursos del server
// const corsOptions = {
//     origin: 'http://localhost:3000',
//   }

// app.use(cors(corsOptions))

// //***********************************
// app.use(express.json())
// //routas con router
// app.use('/', router)


// app.get('/rickandmorty/character/:id',getCharDetail, function(req,res){
//     res.send('get request resolve')
// })


app.listen(3001,()=>{
    console.log("SERVER ON PORT " + PORT);
})
//***************************************************************************

//     //primer server

//     //  http.createServer(function(req,res){
//     //     res.setHeader('Access-Control-Allow-Origin', '*');
//     //     const url = req.url.split('/');
//     //     const id = url[3];
        
//     //     if(req.url.startsWith(`/rickandmorty/character/${id}`)){
//     //         if(id >= 5){
//     //         res.writeHead(400,{'Content-Type': 'text/plain'});
//     //         res.end('Character no found!')
//     //         }
//     //         else{
//     //         res.writeHead(200,{'Content-Type': 'application/json'});
//     //         const character = characters.filter((ele)=>ele.id == id)
//     //         res.end(JSON.stringify(character))
//     //     }
//     //     }
    
//     //  }).listen(3001,"127.0.0.1")

// // SERVER PURO CON NODE    
//     http.createServer(function(req,res){
        
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         //req es un objeto que tiene una prop url que contiene la ruta de la req
//         const url = req.url.split('/');
//         //type sirve para validar que tipo de url es detail o onsearch
//         const type = url[2];
//         const id = url[3];
        
//         if(req.url.startsWith('/rickandmorty/detail/') ){

//             // res.writeHead(200,{'Content-Type': 'text/plain'});
//             // res.end()
//             getCharDetail(res,id)
//         }
//         else if(req.url.startsWith('/rickandmorty/form/')){

            
//         }

    
//     }).listen(3001,"127.0.0.1")
