import { UnauthorizedError } from "../../helpers/error/apiErrors.js";

export const isAdmin = (req, res, next) => {
  if (req.decodedToken.role !== "admin") {
    throw new UnauthorizedError(
      "Acesso negado. Somente administradores podem acessar esta rota.",
    );
  }
  next();
};
