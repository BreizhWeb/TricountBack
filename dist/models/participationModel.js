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
exports.Participation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("./userModel");
const depenseModel_1 = require("./depenseModel");
let Participation = exports.Participation = class Participation extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Participation.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Participation.prototype, "montantPaye", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => userModel_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Participation.prototype, "id_utilisateur", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => depenseModel_1.Depense),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Participation.prototype, "id_depense", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => userModel_1.User),
    __metadata("design:type", userModel_1.User)
], Participation.prototype, "utilisateur", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => depenseModel_1.Depense),
    __metadata("design:type", depenseModel_1.Depense)
], Participation.prototype, "depense", void 0);
exports.Participation = Participation = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "Participation",
    })
], Participation);
