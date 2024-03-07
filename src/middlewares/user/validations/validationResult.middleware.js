import { validationResult } from "express-validator";

// verifica o resultado da validação e personaliza a resposta
export const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
