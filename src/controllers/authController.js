const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Fungsi Register
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (err) => {
        if (err) {
          return res.status(500).json({
            error: true,
            message: err.message,
          });
        }

        res.status(201).json({
          error: false,
          message: 'User created',
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'An error occurred during registration',
    });
  }
};

// Fungsi Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({
        error: true,
        message: 'Invalid credentials',
      });
    }

    try {
      const isValidPassword = await bcrypt.compare(password, results[0].password);
      if (!isValidPassword) {
        return res.status(401).json({
          error: true,
          message: 'Invalid credentials',
        });
      }

      const token = jwt.sign(
        { userId: results[0].id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({
        error: false,
        message: 'Success',
        loginResult: {
          userId: results[0].id,
          name: results[0].username,
          token,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: 'An error occurred during login',
      });
    }
  });
};