
var fechahora=(req, res, next)=>{
    const fechahora = new Date().toISOString;
    console.log('30/08/2024 06:00 pm');
    next();
}


var texto=(req, res, next)=>{
    console.log( "tu puedes enrique ya lo veras");
    next();
}


var prueba=(req, res, next)=>{
    console.log( "texto-prueba");
    next();
}

module.exports = {fechahora, texto, prueba,
};