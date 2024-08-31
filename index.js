const express=require("express");
require("dotenv").config();
const app = express();


const routes = require ('./servidor/rutas');
app.use('/', routes);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("servidor en http://localhost:"+port);
});
