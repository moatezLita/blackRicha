// middleware/errorHandler.js

class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  function errorHandler(err, req, res, next) {
    console.error(err); // Logging the error
  
    if (err instanceof CustomError) {
      res.status(err.statusCode).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = {
    errorHandler,
    CustomError,
  };
  