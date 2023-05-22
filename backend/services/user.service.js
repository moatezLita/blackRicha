const User = require('../models/user.model');

class UserService {
  async getAllUsers() {
    try {
      // Logic to get all users from the database
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Failed to get users');
    }
  }

  async getUserById(userId) {
    try {
      // Logic to get a user by ID from the database
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user');
    }
  }

  async createUser(userData) {
    try {
      // Logic to create a new user in the database
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async updateUser(userId, userData) {
    try {
      // Logic to update a user in the database
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      // Logic to delete a user from the database
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return 'User deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  }
}

module.exports = new UserService();
