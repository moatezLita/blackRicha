const passport = require('../config/passportConfig');
const User = require('../models/user.model');

class UserService {
  async findUserByEmail (email){
    try {
      const user = await User.findOne({  where: { email: email } } );
      return user;
    } catch (error) {
      throw new Error('Failed to find user by email');
    }
  }
  
  async signup(userData) {
    try {
      // Create a new user using the User model
      const newUser = new User.build(userData);

      // Save the user to the database
      await newUser.save();

      // Generate JWT token for the user
      const token = passport.generateToken(newUser);

      return { user: newUser, token };
    } catch (error) {
      throw new Error('Failed to signup');
    }
  }

  async login(username, password) {
    try {
      // Authenticate the user using Passport.js local strategy
      const user = await passport.authenticate('local', { session: false })(username, password);

      // If authentication fails, throw an error
      if (!user) {
        throw new Error('Invalid username or password');
      }

      // Generate JWT token for the user
      const token = passport.generateToken(user);

      return { user, token };
    } catch (error) {
      throw new Error('Failed to login');
    }
  }
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
      const user = await User.findOne(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user');
    }
  }

  async createUser(userData) {
    try {
      // Logic to create a new user in the database
      
      // const user = await User.create({userData});
      const user =  User.build(userData);
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create user');
    }
  }

  async updateUser(userId, userData) {
    try {
      // Logic to update a user in the database
      const user = await User.findOne(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(userData);
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      // Logic to delete a user from the database
      const user = await User.findOne(userId);
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
