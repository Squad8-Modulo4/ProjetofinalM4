import { body } from "express-validator";
import { UserEntity } from "../../../entities/User.entity.js";
import { ERRORS, VALIDATION } from "../../../shared/messages.js";

export const registerUserValidator = [
  // Validações de nome
  body("name", `O nome ${VALIDATION.EMPTY_FIELD}`)
    .isString()
    .withMessage(VALIDATION.MUST_BE_STRING)
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do nome é de 3 caracteres"),
  // Validações de email
  body("email", `E-mail ${VALIDATION.INVALID}`)
    .isEmail()
    .normalizeEmail()
    .custom(async email => {
      return UserEntity.findOne({ where: { email } }).then(existingUser => {
        if (existingUser) {
          return Promise.reject();
        }
      });
    })
    .withMessage(`E-mail ${ERRORS.ALREADY_EXISTS}`),
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
