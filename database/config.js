require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config()

const dbConnection = mysql.createConnection({
    host:       process.env.HOST_CNN,
    user:       process.env.USER_CNN,
    password:   process.env.PASSWORD_CNN,
    database:   process.env.DB_CNN
});

 const dbConnect = async()=>{
    console.log('HOST_CNN:', process.env.HOST_CNN);
    console.log('USER_CNN:', process.env.USER_CNN);
    console.log('PASSWORD_CNN:', process.env.PASSWORD_CNN);
    console.log('DB_CNN:', process.env.DB_CNN);
    dbConnection.connect((err)=>{
        if(err){
            console.error(`error de conexión`.bgRed + `${ err.stack }`.bgMagenta);
            return;
        }
        console.log(`Conectado con el ID: `.bgGreen + `${ dbConnection.threadId }`.bgBlue);
    });
    
 }





module.exports = {
    dbConnect
}