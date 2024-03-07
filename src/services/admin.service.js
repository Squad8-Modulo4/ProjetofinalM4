import { UserEntity } from "../entities/User.entity.js";
import { NotFoundError, UnauthorizedError } from "../helpers/error/apiErrors.js";

export class AdminService {
  static async getAllUsers(req) {
    let { limit } = req.query;
    const users = await UserEntity.findAll({ limit });
    return users;
  }

  static async deleteService(req) {
    const userId = req.params.id;

    const user = await UserEntity.findByPk(userId);
    if (!user) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const updatedUserCounter = await UserEntity.destroy({ where: { id: userId } });

    if (updatedUserCounter > 0) {
      return "Usuário deletado com sucesso!";
    }
    throw new Error("Falha ao deletar usuário.");
  }

  static async promoteUsersToAdminService(req) {
    const userId = req.params.id;
    const { role, password } = req.body;

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
