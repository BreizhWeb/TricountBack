import { RequestHandler } from "express";

import { Users } from "../models/usersModel";

export const createUser: RequestHandler = async (req, res, next) => {
  var users = await Users.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "User created successfully", data: users });
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  const allUsers: Users[] = await Users.findAll();
  return res
    .status(200)
    .json({ message: "Users fetched successfully", data: allUsers });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const users: Users | null = await Users.findByPk(id);
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: users });
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Users.update({ ...req.body }, { where: { id } });
  const updatedUsers: Users | null = await Users.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUsers });
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedUser: Users | null = await Users.findByPk(id);
  await Users.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deletedUser });
};