const express = require('express');
global.app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
global.config = require('./config.js').config;
const mongoose = require('mongoose');
global.SHA256 = require('sha256');
var cors = require('cors');


app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(config.listablanca.indexOf(origin) === -1){
           return callback( 'Error de CORS no tiene permiso para: '+ origin, false);
        } 
        else {
            return callback(null, true);
        }
    },
    credentials: true
}));


require('./rutas.js');

mongoose.connect('mongodb://127.0.0.1:27017/' + config.db).then((res) => {
    console.log('Conexión a la base de datos establecida');
}).catch(err => {
    console.log('Error al conectar a la base de datos');    
});

app.listen(config.puerto, function() {
  console.log('Servidor funcionando por el puerto: '  + config.puerto);
});

