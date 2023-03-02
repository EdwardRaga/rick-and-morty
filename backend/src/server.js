const http = require('http');
const fs = require('fs');
const characters = require('./utils/data')

 http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url.split('/');
    const id = url[3];

    if(req.url.startsWith(`/rickandmorty/character/${id}`)){
        if(id >= 5){
        res.writeHead(400,{'Content-Type': 'text/plain'});
        res.end('Character no found!')
        }
        else{
        res.writeHead(200,{'Content-Type': 'application/json'});
        const character = characters.filter((ele)=>ele.id == id)
        res.end(JSON.stringify(character))
        }
    }
   
 }).listen(3001,"127.0.0.1")
