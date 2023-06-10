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
exports.deleteCategorieDepense = exports.updateCategorieDepense = exports.getCategorieDepenseById = exports.getAllCategoriesDepense = exports.createCategorieDepense = void 0;
const categorieDepenseModel_1 = require("../models/categorieDepenseModel");
const createCategorieDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var users = yield categorieDepenseModel_1.CategorieDepense.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "CategorieDepense created successfully", data: users });
});
exports.createCategorieDepense = createCategorieDepense;
const getAllCategoriesDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allCategoriesDepense = yield categorieDepenseModel_1.CategorieDepense.findAll();
    return res
        .status(200)
        .json({ message: "CategorieDepense fetched successfully", data: allCategoriesDepense });
});
exports.getAllCategoriesDepense = getAllCategoriesDepense;
const getCategorieDepenseById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield categorieDepenseModel_1.CategorieDepense.findByPk(id);
    return res
        .status(200)
        .json({ message: "CategorieDepense fetched successfully", data: users });
});
exports.getCategorieDepenseById = getCategorieDepenseById;
const updateCategorieDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield categorieDepenseModel_1.CategorieDepense.update(Object.assign({}, req.body), { where: { id } });
    const updatedCategorieDepenses = yield categorieDepenseModel_1.CategorieDepense.findByPk(id);
    return res
        .status(200)
        .json({ message: "CategorieDepense updated successfully", data: updatedCategorieDepenses });
});
exports.updateCategorieDepense = updateCategorieDepense;
const deleteCategorieDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCategorieDepense = yield categorieDepenseModel_1.CategorieDepense.findByPk(id);
    yield categorieDepenseModel_1.CategorieDepense.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "CategorieDepense deleted successfully", data: deletedCategorieDepense });
});
exports.deleteCategorieDepense = deleteCategorieDepense;
