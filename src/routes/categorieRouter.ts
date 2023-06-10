import { Router } from "express";

import {
  createCategorie,
  deleteCategorie,
  getAllCategories,
  updateCategorie,
  getCategorieById,
} from "../controller/categorieController";

const router = Router();

router.post("/categorie", createCategorie);

router.get("/categorie", getAllCategories);

router.get("/categorie/:id", getCategorieById);

router.put("/categorie/:id", updateCategorie);

router.delete("/categorie/:id", deleteCategorie);

export default router;