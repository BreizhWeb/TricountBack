import { RequestHandler } from "express";

import { CategorieDepense } from "../models/categorieDepenseModel";

export const createCategorieDepense: RequestHandler = async (req, res, next) => {
  var users = await CategorieDepense.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "CategorieDepense created successfully", data: users });
};

export const getAllCategoriesDepense: RequestHandler = async (req, res, next) => {
  const allCategoriesDepense: CategorieDepense[] = await CategorieDepense.findAll();
  return res
    .status(200)
    .json({ message: "CategorieDepense fetched successfully", data: allCategoriesDepense });
};

export const getCategorieDepenseById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const users: CategorieDepense | null = await CategorieDepense.findByPk(id);
  return res
    .status(200)
    .json({ message: "CategorieDepense fetched successfully", data: users });
};

export const updateCategorieDepense: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await CategorieDepense.update({ ...req.body }, { where: { id } });
  const updatedCategorieDepenses: CategorieDepense | null = await CategorieDepense.findByPk(id);
  return res
    .status(200)
    .json({ message: "CategorieDepense updated successfully", data: updatedCategorieDepenses });
};

export const deleteCategorieDepense: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedCategorieDepense: CategorieDepense | null = await CategorieDepense.findByPk(id);
  await CategorieDepense.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "CategorieDepense deleted successfully", data: deletedCategorieDepense });
};