import { Sequelize, DataTypes } from "sequelize"; 
import { sequelize as database } from "../database/connection.js";

const MovieEntity = database.define('tb_movies',{
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    release_year:{
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    rating:{
        type: DataTypes.ENUM("L", "10", "12", "14", "16", "18"),
        allowNull: false
    },
    id_director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_genre:{
        type: DataTypes.STRING,
        allowNull: false
    }

})

export { MovieEntity }