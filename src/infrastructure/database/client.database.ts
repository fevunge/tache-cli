import { Sequelize } from "sequelize";
import { Client } from "pg";


export const sequelizeClient = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});