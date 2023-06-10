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
exports.deleteDepense = exports.updateDepense = exports.getDepenseById = exports.getAllDepenses = exports.createDepense = void 0;
const depenseModel_1 = require("../models/depenseModel");
const createDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var depense = yield depenseModel_1.Depense.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Depense created successfully", data: depense });
});
exports.createDepense = createDepense;
const getAllDepenses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allDepenses = yield depenseModel_1.Depense.findAll();
    return res
        .status(200)
        .json({ message: "Depense fetched successfully", data: allDepenses });
});
exports.getAllDepenses = getAllDepenses;
const getDepenseById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const depense = yield depenseModel_1.Depense.findByPk(id);
    return res
        .status(200)
        .json({ message: "Depense fetched successfully", data: depense });
});
exports.getDepenseById = getDepenseById;
const updateDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield depenseModel_1.Depense.update(Object.assign({}, req.body), { where: { id } });
    const updatedDepense = yield depenseModel_1.Depense.findByPk(id);
    return res
        .status(200)
        .json({ message: "Depense updated successfully", data: updatedDepense });
});
exports.updateDepense = updateDepense;
const deleteDepense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedDepense = yield depenseModel_1.Depense.findByPk(id);
    yield depenseModel_1.Depense.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Depense deleted successfully", data: deletedDepense });
});
exports.deleteDepense = deleteDepense;
