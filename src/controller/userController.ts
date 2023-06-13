import { RequestHandler } from "express";

import { User } from "../models/userModel";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({   
      where: { email: req.body.email }  
    });
    if (existingUser) {
      return res.status(409).json({ message: 'Adresse e-mail déjà utilisée.' });
    }

    var user = await User.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "User created successfully", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({  message: "Une erreur est survenue lors de l\'inscription." });
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  const allUsers: User[] = await User.findAll();
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: allUsers });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: user });
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUser });
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedUser: User | null = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deletedUser });
};