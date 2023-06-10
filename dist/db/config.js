"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("../models/userModel");
const depenseModel_1 = require("../models/depenseModel");
const categorieModel_1 = require("../models/categorieModel");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "tricount",
    logging: false,
    models: [userModel_1.User, depenseModel_1.Depense, categorieModel_1.Categorie],
});
exports.default = connection;
