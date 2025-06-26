// middleware/error.middleware.js
const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.message);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong on the server',
  });
};

module.exports = errorHandler;
