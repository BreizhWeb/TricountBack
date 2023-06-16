import { Router } from "express";

import {
  createParticipation,
  deleteParticipation,
  getAllParticipations,
  getParticipationById,
  updateParticipation,
} from "../controller/participationController";

const router = Router();

router.post("/participation", createParticipation);

router.get("/participation", getAllParticipations);

router.get("/participation/:id", getParticipationById);

router.put("/participation/:id", updateParticipation);

router.delete("/participation/:id", deleteParticipation);

export default router;
