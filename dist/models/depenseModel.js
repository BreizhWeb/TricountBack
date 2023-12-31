"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Depense = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("./userModel");
const categorieDepenseModel_1 = require("./categorieDepenseModel");
const participationModel_1 = require("./participationModel");
let Depense = exports.Depense = class Depense extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Depense.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Depense.prototype, "montant", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Depense.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => categorieDepenseModel_1.CategorieDepense),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Depense.prototype, "id_categorie_depense", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => userModel_1.User, () => participationModel_1.Participation),
    __metadata("design:type", Array)
], Depense.prototype, "utilisateurs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => categorieDepenseModel_1.CategorieDepense),
    __metadata("design:type", categorieDepenseModel_1.CategorieDepense)
], Depense.prototype, "categorie_depense", void 0);
exports.Depense = Depense = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "Depenses",
    })
], Depense);
