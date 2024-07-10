const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // Replace with your User model

const secretKey = 'i9ZxB3jekK/6N9JE9JCPH3QaX/9TTEOSMlR6VZ3SPpM';

// JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:secretKey , // Replace with your secret key
    },
    async (payload, done) => {
      try {
        // Find the user based on the token payload
        const user = await User.findOne(payload.sub);

        // If user doesn't exist, return false
        if (!user) {
          return done(null, false);
        }

        // If user exists, return the user object
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// Local Strategy (for signup/login)
passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email: email } });

      // If user doesn't exist or password is incorrect, return false
      if (!user || !user.comparePassword(password)) {
        return done(null, false);
      }

      // If user exists and password is correct, return the user object
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);


// Generate JWT token
// const generateToken = (user) => {
//   const payload = {
//     sub: user._id,
//     // Add any additional data to the token payload
//   };

//   return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' }); // Replace with your secret key and token expiration time
// };

module.exports = { passport };
