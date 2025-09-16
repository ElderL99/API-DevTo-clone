const express = require("express");
const userCases = require("../usecases/user.useCases");
const auth = require("../middlewares/auth/auth");
const router = express.Router();

// Registro
router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userCases.signUp(userData);

    res.json({
      success: true,
      message: "User created successfully 🎉",
      data: { newUser },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message,
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const loginData = req.body;
    const token = await userCases.login(loginData);

    res.json({
      success: true,
      message: "Login successful ✅",
      data: { token },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;
