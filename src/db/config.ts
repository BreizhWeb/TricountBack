import { Sequelize } from "sequelize-typescript";
import { User } from "../models/userModel";
import { Depense } from "../models/depenseModel";
import { Categorie } from "../models/categorieModel";


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "tricount",
  logging: false,
  models: [User, Depense, Categorie],
});

export default connection;