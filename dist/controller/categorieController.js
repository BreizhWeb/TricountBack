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
exports.deleteCategorie = exports.updateCategorie = exports.getCategorieById = exports.getAllCategories = exports.createCategorie = void 0;
const categorieModel_1 = require("../models/categorieModel");
const createCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var users = yield categorieModel_1.Categorie.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Categorie created successfully", data: users });
});
exports.createCategorie = createCategorie;
const getAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allCategories = yield categorieModel_1.Categorie.findAll();
    return res
        .status(200)
        .json({ message: "Categorie fetched successfully", data: allCategories });
});
exports.getAllCategories = getAllCategories;
const getCategorieById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield categorieModel_1.Categorie.findByPk(id);
    return res
        .status(200)
        .json({ message: "Categorie fetched successfully", data: users });
});
exports.getCategorieById = getCategorieById;
const updateCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield categorieModel_1.Categorie.update(Object.assign({}, req.body), { where: { id } });
    const updatedCategories = yield categorieModel_1.Categorie.findByPk(id);
    return res
        .status(200)
        .json({ message: "Categorie updated successfully", data: updatedCategories });
});
exports.updateCategorie = updateCategorie;
const deleteCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCategorie = yield categorieModel_1.Categorie.findByPk(id);
    yield categorieModel_1.Categorie.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Categorie deleted successfully", data: deletedCategorie });
});
exports.deleteCategorie = deleteCategorie;
