import { Router } from "express";

import {
  createDepense,
  deleteDepense,
  getAllDepenses,
  getDepenseById,
  updateDepense,
} from "../controller/depenseController";

const router = Router();

// Route POST
router.post("/depense", createDepense);

// Route GET
router.get("/depense", getAllDepenses);

// Route GET
router.get("/depense/:id", getDepenseById);

// Route PUT
router.put("/depense/:id", updateDepense);

// Route DELETE
router.delete("/depense/:id", deleteDepense);

export default router;