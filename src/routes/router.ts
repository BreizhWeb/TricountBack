import { Router } from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getUserById,
} from "../controller/usersController";

const router = Router();

router.post("/", createUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;