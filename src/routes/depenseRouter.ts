import { Router } from "express";

import {
  createDepense,
  deleteDepense,
  getAllDepenses,
  updateDepense,
  getDepenseById,
} from "../controller/depenseController";

const router = Router();

router.post("/depense", createDepense);

router.get("/depense", getAllDepenses);

router.get("/depense/:id", getDepenseById);

router.put("/depense/:id", updateDepense);

router.delete("/depense/:id", deleteDepense);

export default router;