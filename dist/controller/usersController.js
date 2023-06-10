"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const usersModel_1 = require("../models/usersModel");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var users = yield usersModel_1.Users.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "User created successfully", data: users });
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield usersModel_1.Users.findAll();
    return res
        .status(200)
        .json({ message: "Users fetched successfully", data: allUsers });
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield usersModel_1.Users.findByPk(id);
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: users });
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield usersModel_1.Users.update(Object.assign({}, req.body), { where: { id } });
    const updatedUsers = yield usersModel_1.Users.findByPk(id);
    return res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUsers });
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedUser = yield usersModel_1.Users.findByPk(id);
    yield usersModel_1.Users.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "User deleted successfully", data: deletedUser });
});
exports.deleteUser = deleteUser;
