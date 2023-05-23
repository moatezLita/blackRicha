const UserService = require('../services/user.service');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    const { id:userId } = req.params;
    try {
      
      const user = await UserService.getUserById({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    const userData = req.body;
    try {
      const newUser = await UserService.createUser(userData);
      res.status(201).json({newUser});
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  async updateUser(req, res) {
    const {id:userId}  = req.params;
    const userData = req.body;
    try {
      console.log({userId});
      const updatedUser = await UserService.updateUser({ where: { id: userId } }, userData);
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    const { id:userId } = req.params;
    try {
      const result = await UserService.deleteUser({ where: { id: userId } });
      if (result === 'User not found') {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
