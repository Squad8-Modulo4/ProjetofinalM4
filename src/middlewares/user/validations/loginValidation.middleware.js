import { body } from "express-validator";
import { VALIDATION } from "../../../shared/messages.js";

export const loginUserValidator = [
  // Validações de email
  body("email", `E-mail ${VALIDATION.INVALID}`).isEmail().normalizeEmail(),
  // Validações de senha
  body("password", `A senha ${VALIDATION.EMPTY_FIELD}`)
    .isString()
    .withMessage(VALIDATION.MUST_BE_STRING)
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("O tamanho mínimo da senha é de 6 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
    .withMessage("A senha deve conter letras maiúsculas, minúsculas e números"),
];
