import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

 const GenreEntity =  database.define( "tb_genre", {
    id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
    },
        name: {
            type: DataTypes.STRING,
            allowNull: false
    }

});
 export {GenreEntity}