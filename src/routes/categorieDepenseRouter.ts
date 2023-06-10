import { Router } from "express";

import {
  createCategorieDepense,
  deleteCategorieDepense,
  getAllCategoriesDepense,
  updateCategorieDepense,
  getCategorieDepenseById,
} from "../controller/categorieDepenseController";

const router = Router();

router.post("/categorieDepense", createCategorieDepense);

router.get("/categorieDepense", getAllCategoriesDepense);

router.get("/categorieDepense/:id", getCategorieDepenseById);

router.put("/categorieDepense/:id", updateCategorieDepense);

router.delete("/categorieDepense/:id", deleteCategorieDepense);

export default router;