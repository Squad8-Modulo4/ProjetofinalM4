import { AdminService } from "../services/admin.service.js";

class AdminController {
  static async getAllUsers(req, res) {
    const users = await AdminService.getAllUsers(req);
    return res.json({ users });
  }

  static async deleteUsers(req, res) {
    const message = await AdminService.deleteService(req);

    return res.json({ message });
  }

  static async promoteUsersToAdmin(req, res) {
    const admin = await AdminService.promoteUsersToAdminService(req);

    return res.json({
      message: admin,
    });
  }
}

export default AdminController;
