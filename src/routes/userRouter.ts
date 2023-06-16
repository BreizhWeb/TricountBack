import { Router } from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getUserById,
} from "../controller/userController";

const router = Router();

// Route POST
router.post("/user", createUser);

// Route GET
router.get("/user", getAllUsers);

// Route GET
router.get("/user/:id", getUserById);

// Route PUT
router.put("/user/:id", updateUser);

// Route DELETE
router.delete("/user/:id", deleteUser);

export default router;