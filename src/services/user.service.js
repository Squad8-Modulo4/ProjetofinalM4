import { UserEntity } from "../entities/User.entity.js";
import { ERRORS, SUCESS } from "../shared/message.js";

class UserService {
    async createUserService(name, email, password, role) {
        try {
            await UserEntity.sync();
            const newUser = await UserEntity.create({
                name, email, password, role
            });
            return `Usuário ${SUCESS.CREATED}`, newUser;
        } catch (error) {
            return error;
        }
    }

    async getUserByIdService(id) {
        try {
            const userId = await UserEntity.findByPk(id);
            if (!userId) {
                return `Usuário ${ERRORS.NOT_FOUND}`;
            }
            return userId;
        } catch (error) {
            return error;
        }
    }

    async updateEmailService(id, newEmail) {
        try {
            const userId = await UserEntity.findByPk(id);
            if (!userId) {
                return `Usuário ${ERRORS.NOT_FOUND}`;
            }
            await UserEntity.update({ email: newEmail }, {
                where: {
                    id
                }
            });
            const messageUpdate = await UserEntity.findByPk(id);
            return messageUpdate;
        } catch (error) {
            return error;
        }
    }

    async updatePasswordService(id, newPassword) {
        try {
            const userId = await UserEntity.findByPk(id);
            if (!userId) {
                return `Usuário ${ERRORS.NOT_FOUND}`;
            }
            await UserEntity.update({ password: newPassword }, {
                where: {
                    id
                }
            });
            const messageUpdate = await UserEntity.findByPk(id);
            return messageUpdate;
        } catch (error) {
            return error;
        }
    }

    async deleteUserService(id) {
        try {
            const userId = await UserEntity.findByPk(id);
            if (!userId) {
                return `Usuário ${ERRORS.NOT_FOUND}`;
            }
            await UserEntity.destroy({
                where: {
                    id
                }
            });
            return `Usuário ${SUCESS.DELETED}`
        } catch (error) {
            return error;
        }
    }
}

export { UserService }