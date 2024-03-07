import { body, param } from "express-validator";
import { VALIDATION } from "../../../shared/messages.js";

export const promoteAdminValidator = [
  // Validações de nome
  body("role", `Role ${VALIDATION.INVALID}`)
    .isString()
    .withMessage(VALIDATION.MUST_BE_STRING)
    .trim()
    .not()
    .isEmpty()
    .withMessage(`A role ${VALIDATION.EMPTY_FIELD}`)
    .isLength({ min: 3 })
    .equals("admin"),
  // Validações de senha
  body("password", `Senha ${VALIDATION.INVALID}`)
    .isString()
    .withMessage(VALIDATION.MUST_BE_STRING)
    .trim()
    .not()
    .isEmpty()
    .withMessage(`A senha ${VALIDATION.EMPTY_FIELD}`),
  param("id").isUUID(4).withMessage("ID deve ser um UUIDV4 válido"),
];
