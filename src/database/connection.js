import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false,
  },
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão feita com sucesso!");
  } catch (error) {
    console.log("Conexão mal sucedida!");
  }
};

export { sequelize, testConnection };
