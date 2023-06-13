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
const userModel_1 = require("../models/userModel");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield userModel_1.User.findOne({
            where: { email: req.body.email }
        });
        if (existingUser) {
            return res.status(409).json({ message: 'Adresse e-mail déjà utilisée.' });
        }
        var user = yield userModel_1.User.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ message: "User created successfully", data: user });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Une erreur est survenue lors de l\'inscription." });
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield userModel_1.User.findAll();
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: allUsers });
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield userModel_1.User.findByPk(id);
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: user });
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield userModel_1.User.update(Object.assign({}, req.body), { where: { id } });
    const updatedUser = yield userModel_1.User.findByPk(id);
    return res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUser });
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedUser = yield userModel_1.User.findByPk(id);
    yield userModel_1.User.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "User deleted successfully", data: deletedUser });
});
exports.deleteUser = deleteUser;
