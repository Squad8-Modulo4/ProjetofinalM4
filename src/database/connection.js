import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host:  process.env.DB_HOST ,
    dialect: 'postgres',
    port:  process.env.DB_PORT,
    logging: false

});

const testConnection = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Conexão foi realizada com sucesso")
    } catch(error){
        console.log("Falha na conexão", error)
    }
}

export { sequelize, testConnection}