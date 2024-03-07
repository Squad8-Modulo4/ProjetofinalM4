import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../../../helpers/error/apiErrors.js";
import { UserEntity } from "../../../entities/User.entity.js";

export const authUser = async (req, res, next) => {
  const token = getTokenFromHeader(req.headers.authorization);
  const decodedToken = verifyToken(token);
  const user = await findUserById(decodedToken.id);
  validateUserExistence(user);
  const loggedUser = filterSensitiveData(user);
  setRequestUserAndToken(req, loggedUser, decodedToken);
  next();
};

const getTokenFromHeader = authorizationHeader => {
  if (!authorizationHeader) {
    throw new UnauthorizedError("Token de autenticação não fornecido.");
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    throw new UnauthorizedError("Token de autenticação não fornecido.");
  }
  return token;
};

const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_PASS);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedError("Token inválido.");
    }
    throw error;
  }
};

const findUserById = async id => {
  const user = await UserEntity.findOne({ where: { id } });
  return user;
};

const validateUserExistence = user => {
  if (!user) {
    throw new UnauthorizedError("Não existe usuário com esse token.");
  }
};

const filterSensitiveData = user => {
  const { password, role, ...loggedUser } = user.get({ plain: true });
  return loggedUser;
};

const setRequestUserAndToken = (req, loggedUser, decodedToken) => {
  req.user = loggedUser;
  req.decodedToken = decodedToken;
};
