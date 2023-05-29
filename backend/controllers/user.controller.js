const UserService = require('../services/user.service');
const { CustomError } = require('../middleware/errorHandler');

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(new CustomError('Failed to get all users', 500));
    }
  }

  async getUserById(req, res, next) {
    const { id: userId } = req.params;
    try {
      const user = await UserService.getUserById({ where: { id: userId } });
      if (!user) {
        return next(new CustomError('User not found', 404));
      }
      res.json(user);
    } catch (error) {
      next(new CustomError('Failed to get user by ID', 500));
    }
  }

  async createUser(req, res, next) {
    const userData = req.body;
    try {
      const newUser = await UserService.createUser(userData);
      res.status(201).json({ newUser });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      } else {
        next(new CustomError('Failed to create user', 500));
      }
    }
  }

  async updateUser(req, res, next) {
    const { id: userId } = req.params;
    const userData = req.body;
    try {
      const updatedUser = await UserService.updateUser({ where: { id: userId } }, userData);
      if (!updatedUser) {
        return next(new CustomError('User not found', 404));
      }
      res.json(updatedUser);
    } catch (error) {
      next(new CustomError('Failed to update user', 500));
    }
  }

  async deleteUser(req, res, next) {
    const { id: userId } = req.params;
    try {
      const result = await UserService.deleteUser({ where: { id: userId } });
      if (result === 'User not found') {
        return next(new CustomError('User not found', 404));
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      next(new CustomError('Failed to delete user', 500));
    }
  }
}

module.exports = new UserController();
