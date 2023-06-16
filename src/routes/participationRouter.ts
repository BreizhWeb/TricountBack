import { Router } from "express";

import {
  createParticipation,
  deleteParticipation,
  getAllParticipations,
  getParticipationById,
  updateParticipation,
} from "../controller/participationController";

const router = Router();

// Route POST
router.post("/participation", createParticipation);

// Route GET
router.get("/participation", getAllParticipations);

// Route GET
router.get("/participation/:id", getParticipationById);

// Route PUT
router.put("/participation/:id", updateParticipation);

// Route DELETE
router.delete("/participation/:id", deleteParticipation);

export default router;
