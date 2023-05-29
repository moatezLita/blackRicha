const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passport } = require('../config/passportConfig');
const UserService = require('../services/user.service');
const {generateToken,generateResetToken} = require ('../utils/auth.utils');
const {sendPasswordResetEmail} = require ('../utils/email.utils');

const regex = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

function emailRegex({exact} = {}) {
	return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
}
// ... existing code ...

class AuthController {
  async signup(req, res, next) {
    passport.authenticate('local', { session: false }, async (err, user) => {
      try {
        if (err) {
          return next(err);
        }
       

        if (user) {
          return res.status(409).json({ message: 'Email already registered' });
        }

        // Create a new user
        const { username, email, password } = req.body;
        if (!emailRegex().test(email)) {
          return res.status(400).json({ message: 'Invalid email format' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await UserService.createUser({ username,email, password: hashedPassword });

        // Generate and send the authentication token
        const token = generateToken(newUser);
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    })(req, res, next);
  }

  async login(req, res, next) {
    passport.authenticate('local', { session: false }, async (err, user) => {
      try {
        if (err) {
          return next(err);
        }
  
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
  
        // Validate the password
        const { password } = req.body;
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
  
        // Generate and send the authentication token
        const token = generateToken(user);
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    })(req, res, next);
  }




  forgotPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
  
      // Check if the user with the provided email exists
      const user = await UserService.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate a password reset token
      const resetToken = generateResetToken();
  
      // Save the reset token and its expiration date to the user
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
      await user.save();
  
      // Send the password reset instructions to the user's email
      sendPasswordResetEmail(user.email, resetToken);
  
      res.json({ message: 'Password reset instructions sent to your email' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
}
module.exports = new AuthController();
