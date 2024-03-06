import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const DirectorEntity = database.define("tb_director", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false 
    }

}) 

export { DirectorEntity };