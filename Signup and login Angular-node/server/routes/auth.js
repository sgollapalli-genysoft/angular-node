const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database'); // This will handle the DB connection
require('dotenv').config();

const router = express.Router();

// User Signup Route
router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length > 0) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Error hashing password' });
            }

            // Store new user in database
            const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(query, [username, email, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Database error' });
                }
                res.status(201).json({ message: 'User created successfully' });
            });
        });
    });
});

// User Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare password with hashed password
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Error comparing passwords' });
            }

            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password' });
            }

            // Create a JWT token
            const token = jwt.sign({ userId: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.json({
                message: 'Login successful',
                token
            });
        });
    });
});

module.exports = router;
