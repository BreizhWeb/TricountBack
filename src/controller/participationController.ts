import { RequestHandler } from "express";

import { Participation } from "../models/participationModel";

export const createParticipation: RequestHandler = async (req, res, next) => {
  try {
    const participation = await Participation.create({ ...req.body });
    return res.status(200).json({ message: "Participation created successfully", data: participation });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred while creating the participation." });
  }
};

export const getAllParticipations: RequestHandler = async (req, res, next) => {
  const allParticipations = await Participation.findAll();
  return res.status(200).json({ message: "Participations fetched successfully", data: allParticipations });
};

export const getParticipationById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const participation = await Participation.findByPk(id);
  return res.status(200).json({ message: "Participation fetched successfully", data: participation });
};

export const updateParticipation: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Participation.update({ ...req.body }, { where: { id } });
  const updatedParticipation = await Participation.findByPk(id);
  return res.status(200).json({ message: "Participation updated successfully", data: updatedParticipation });
};

export const deleteParticipation: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedParticipation = await Participation.findByPk(id);
  await Participation.destroy({ where: { id } });
  return res.status(200).json({ message: "Participation deleted successfully", data: deletedParticipation });
};
