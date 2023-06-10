"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const usersModel_1 = require("../models/usersModel");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "tricount",
    logging: false,
    models: [usersModel_1.Users],
});
exports.default = connection;
