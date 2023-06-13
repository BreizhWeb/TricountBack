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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = require("../models/userModel"); // Assurez-vous d'importer correctement votre modèle User
const router = express_1.default.Router();
router.get('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, mdp } = req.query;
    try {
        const user = yield userModel_1.User.findOne({
            where: {
                email,
                mdp
            }
        });
        if (user) {
            // Utilisateur trouvé
            res.status(200).json({ message: 'Utilisateur trouvé', data: user });
        }
        else {
            // Utilisateur non trouvé
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    }
    catch (error) {
        // Erreur de recherche
        res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur', error: error });
    }
}));
exports.default = router;
