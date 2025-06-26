const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    SECRET,
    { expiresIn: '2h' }
  );
};

module.exports = { generateToken };
