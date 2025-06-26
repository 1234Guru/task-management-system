const bcrypt = require('bcrypt');
const { createUser, findUserByEmail } = require('../models/user.model');
const { generateToken } = require('../utils/token.util');

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
 //console.log('Login hit:', req.body);
    if (!(name && email && password)) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    findUserByEmail(email, async (err, results) => {
      if (err) return next(err);
      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      createUser(name, email, hashedPassword, (err, result) => {
        if (err) return next(err);
        return res.status(201).json({ message: 'User registered successfully' });
      });
    });
  } catch (err) {
    next(err);
  }
};

const login = (req, res, next) => {
  const { email, password } = req.body;
 //console.log('Login hit:', req.body);
  if (!(email && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }
//console.log( email, password )
  findUserByEmail(email, async (err, results) => {
    if (err) return next(err);
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    return res.status(200).json({ token });
  });
};

module.exports = { register, login };
