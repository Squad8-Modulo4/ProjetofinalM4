import { body, param } from "express-validator";
import { VALIDATION } from "../../../shared/messages.js";

export const updateUserValidator = [
  // Validações de nome
  body("name", `O nome ${VALIDATION.EMPTY_FIELD}`)
    .isString()
    .withMessage(VALIDATION.MUST_BE_STRING)
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do nome é de 3 caracteres"),
  param("id").isUUID(4).withMessage("ID deve ser um UUIDV4 válido"),
];
