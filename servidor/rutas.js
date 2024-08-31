const express = require('express');
const ruta = express.Router();
const {fechahora, texto, prueba} = require('../midd/mid');



//ruta raiz
ruta.get("/fecha",fechahora,(req, res)=>{
    res.send("texto de prueba");
});


//ruta fecha y hora
ruta.get("/texto",texto,(req, res)=>{
    res.send("texto de prueba");
});


//ruta texto de prueba
ruta.get("/prueba",prueba,(req, res)=>{
    res.send("estas en prueba");
});


module.exports = ruta;
