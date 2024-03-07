import { param } from "express-validator";

export const deleteUserValidator = [
  param("id").isUUID(4).withMessage("ID deve ser um UUIDV4 válido"),
];
