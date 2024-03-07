import { UserEntity } from "../entities/User.entity.js";
import bcrypt from "bcrypt";
import { createToken } from "../helpers/user/createToken.js";
import { validateUserCredentials } from "../helpers/user/validateCredentials.js";
import { NotFoundError, UnauthorizedError } from "../helpers/error/apiErrors.js";

export class UserService {
  static async registerService(name, email, password) {
    await UserEntity.sync();

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await UserEntity.create({
      name,
      email,
      password: hashPassword,
    });

    const { password: _, ...user } = createUser.get({ plain: true });
    return user;
  }

  static async loginService(email, password) {
    const user = await validateUserCredentials(email, password);
    const token = createToken(user);
    return token;
  }

  static async updateService(req) {
    const { name } = req.body;
    const userId = req.params.id;

    if (req.user.id !== userId) {
      throw new UnauthorizedError("Você não tem permissão para atualizar este usuário.");
    }

    const user = await UserEntity.findByPk(userId);
    if (!user) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const affectedRows = await UserEntity.update({ name }, { where: { id: userId } });

    if (affectedRows[0] > 0) {
      const userData = await UserEntity.findByPk(userId);
      const { password, role, ...updatedUser } = userData.get({ plain: true });
      return updatedUser;
    }
    throw new Error("Falha na atualização do usuário.");
  }

  static async deleteService(req) {
    const userId = req.params.id;

    if (req.user.id !== userId) {
      throw new UnauthorizedError("Você não tem permissão para deletar este usuário.");
    }

    const user = await UserEntity.findByPk(userId);
    if (!user) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const affectedRows = await UserEntity.destroy({ where: { id: userId } });

    if (affectedRows > 0) {
      return "Usuário deletado com sucesso!";
    }
    throw new Error("Falha ao deletar usuário.");
  }

  static async promoteSelfToAdminService(req) {
    const userId = req.params.id;
    const { role, password } = req.body;

    if (req.user.id !== userId) {
      throw new UnauthorizedError("Você não tem permissão para promover este usuário.");
    }

    const user = await UserEntity.findByPk(userId);
    if (!user) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const secretPass = process.env.ADMIN_PROMOTION_SECRET;

    if (password === secretPass) {
      const affectedRows = await UserEntity.update({ role }, { where: { id: userId } });

      if (affectedRows[0] > 0) {
        return "Admin adicionado com sucesso!";
      }
    }
    throw new UnauthorizedError("Senha incorreta.");
  }
}
