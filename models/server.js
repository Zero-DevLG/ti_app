require('colors');
const dotenv = require('dotenv');
const express = require('express'); // bibliote para servicios
const { dbConnect } = require('../database/config');

dotenv.config({ path: __dirname + '/.env' });

class Server
{
    constructor()
    {
        
        this.app = express();
        this.port = process.env.PORT;


        //Conexion a BD
        this.onDataBase();

    }

    async onDataBase(){
        await dbConnect();
    }

    listenInfo()
    {
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto: ${ this.port}`.bgGreen);
        });
    }
    
}

module.exports = Server;

