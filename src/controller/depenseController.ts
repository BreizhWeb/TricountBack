import { RequestHandler } from "express";

import { Depense } from "../models/depenseModel";

export const createDepense: RequestHandler = async (req, res, next) => {
  var depense = await Depense.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Depense created successfully", data: depense });
};

export const getAllDepenses: RequestHandler = async (req, res, next) => {
  const allDepenses: Depense[] = await Depense.findAll();
  return res
    .status(200)
    .json({ message: "Depense fetched successfully", data: allDepenses });
};

export const getDepenseById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const depense: Depense | null = await Depense.findByPk(id);
  return res
    .status(200)
    .json({ message: "Depense fetched successfully", data: depense });
};

export const updateDepense: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Depense.update({ ...req.body }, { where: { id } });
  const updatedDepense: Depense | null = await Depense.findByPk(id);
  return res
    .status(200)
    .json({ message: "Depense updated successfully", data: updatedDepense });
};

export const deleteDepense: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedDepense: Depense | null = await Depense.findByPk(id);
  await Depense.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Depense deleted successfully", data: deletedDepense });
};