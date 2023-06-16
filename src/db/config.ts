import { Sequelize } from "sequelize-typescript";
import { User } from "../models/userModel";
import { Depense } from "../models/depenseModel";
import { CategorieDepense } from "../models/categorieDepenseModel";
import { Participation } from "../models/participationModel";


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "tricount",
  logging: false,
  models: [User, Depense, CategorieDepense, Participation],
});

export default connection;