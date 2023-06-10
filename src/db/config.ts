import { Sequelize } from "sequelize-typescript";
import { Users } from "../models/usersModel";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "tricount",
  logging: false,
  models: [Users],
});

export default connection;