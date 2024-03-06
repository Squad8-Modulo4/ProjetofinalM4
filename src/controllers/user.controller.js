import { UserService } from "../services/user.service.js";
import { SUCESS } from "../shared/message.js";

const instanceUserService = new UserService();

const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await instanceUserService.createUserService(name, email, password, role);
    res
        .status(201)
        .json({
            message: `Usuário ${SUCESS.CREATED}`, newUser
        });
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const userFindId = await instanceUserService.getUserByIdService(id);
    res.json({ userFindId });
}

const updateEmail = async (req, res) => {
    const { id } = req.params;
    const { newEmail } = req.body;
    const emailUpdate = await instanceUserService.updateEmailService(id, newEmail);
    res.json({ emailUpdate });
}

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;
    const passwordUpdate = await instanceUserService.updatePasswordService(id, newPassword);
    res.json({ passwordUpdate });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const delUser = await instanceUserService.deleteUserService(id);
    res.json({
        message: `Usuário ${SUCESS.DELETED}`
    });
}

export { createUser, getUserById, updateEmail, updatePassword, deleteUser }