import { UserService } from "../services/user.service.js";
import { SUCCESS } from "../shared/messages.js";

class UserController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    const newUser = await UserService.registerService(name, email, password);

    return res.status(201).json({
      message: `Usuário(a) ${SUCCESS.CREATED}`,
      newUser,
    });
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await UserService.loginService(email, password);

    return res.json({
      message: "Login efetuado com sucesso!",
      token: user,
    });
  }

  static async getProfile(req, res) {
    return res.json({ profile: req.user });
  }

  static async update(req, res) {
    const userUpdated = await UserService.updateService(req);

    return res.json({
      message: "Usuário atualizado com sucesso!",
      userUpdated,
    });
  }

  static async delete(req, res) {
    const message = await UserService.deleteService(req);

    return res.json({ message });
  }

  static async promoteSelfToAdmin(req, res) {
    const admin = await UserService.promoteSelfToAdminService(req);

    return res.json({
      message: admin,
    });
  }

  static async uptime(req, res) {
    res.set("Content-Type", "text/plain");
    res.sendStatus(200);
  }
}

export default UserController;
