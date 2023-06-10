const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
// Middleware function to authenticate requests
const authenticate = (req, res, next) => {
    
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the user ID to thes request object
    req.userId = decoded.id;
    const isAdmin = decoded.isAdmin;
    if (!isAdmin) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Proceed to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;