import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('otgdbbzo', 'otgdbbzo', 'MVsElsgVX8bHu5nWl4wec9LSIB4Takkq', {
    host: 'drona.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
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