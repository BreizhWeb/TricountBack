import { RequestHandler } from "express";

import { Categorie } from "../models/categorieModel";

export const createCategorie: RequestHandler = async (req, res, next) => {
  var users = await Categorie.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Categorie created successfully", data: users });
};

export const getAllCategories: RequestHandler = async (req, res, next) => {
  const allCategories: Categorie[] = await Categorie.findAll();
  return res
    .status(200)
    .json({ message: "Categorie fetched successfully", data: allCategories });
};

export const getCategorieById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const users: Categorie | null = await Categorie.findByPk(id);
  return res
    .status(200)
    .json({ message: "Categorie fetched successfully", data: users });
};

export const updateCategorie: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Categorie.update({ ...req.body }, { where: { id } });
  const updatedCategories: Categorie | null = await Categorie.findByPk(id);
  return res
    .status(200)
    .json({ message: "Categorie updated successfully", data: updatedCategories });
};

export const deleteCategorie: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedCategorie: Categorie | null = await Categorie.findByPk(id);
  await Categorie.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Categorie deleted successfully", data: deletedCategorie });
};