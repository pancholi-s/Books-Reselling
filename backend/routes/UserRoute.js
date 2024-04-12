import express from "express";
import { User } from "../models/User";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET; // Secret key from the .env file

// Register a new user
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "User already exists",
      });
    }

    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Create a JWT token
    const data = { user: { id: newUser.id, email } }; // Create a payload

    const expiration = { expiresIn: 3600 * 24 * 30 }; // Set the expiration time (Currently set to 30 days)
    const authToken = jwt.sign(data, JWT_SECRET, expiration);

    // Send the token in the response
    res.json({
      success: true,
      authToken,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message || "Error in registering the user",
    });
  }
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User does not exist",
      });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid password",
      });
    }

    // Create a JWT token
    const data = { user: { id: user.id, email } }; // Create a payload

    const expiration = { expiresIn: 3600 * 24 * 30 }; // Set the expiration time (Currently set to 30 days)
    const authToken = jwt.sign(data, JWT_SECRET, expiration);

    // Send the token in the response
    res.json({
      success: true,
      authToken,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Error in logging in the user",
    });
  }
});

export default router;
