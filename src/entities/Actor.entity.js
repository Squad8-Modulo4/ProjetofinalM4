import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const ActorEntity = database.define("tb_actor", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    awards: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export { ActorEntity }