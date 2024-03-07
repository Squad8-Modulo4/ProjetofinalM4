import bcrypt from "bcrypt";
import { UserEntity } from "../../entities/User.entity.js";
import { VALIDATION } from "../../shared/messages.js";
import { BadRequestError } from "../error/apiErrors.js";

export const validateUserCredentials = async (email, password) => {
  const user = await UserEntity.findOne({ where: { email } });
  if (!user) {
    throw new BadRequestError(`E-mail ou senha ${VALIDATION.INVALID}`);
  }

  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    throw new BadRequestError(`E-mail ou senha ${VALIDATION.INVALID}`);
  }

  return user;
};
