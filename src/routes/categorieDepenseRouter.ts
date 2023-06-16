import { Router } from "express";

import {
  createCategorieDepense,
  deleteCategorieDepense,
  getAllCategoriesDepense,
  updateCategorieDepense,
  getCategorieDepenseById,
} from "../controller/categorieDepenseController";

const router = Router();

// Route POST
router.post("/categorieDepense", createCategorieDepense);

// Route GET
router.get("/categorieDepense", getAllCategoriesDepense);

// Route GET
router.get("/categorieDepense/:id", getCategorieDepenseById);

// Route PUT
router.put("/categorieDepense/:id", updateCategorieDepense);

// Route DELETE
router.delete("/categorieDepense/:id", deleteCategorieDepense);

export default router;