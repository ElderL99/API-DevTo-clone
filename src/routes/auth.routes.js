const express = require("express");
const UseruseCases = require("../usecases/userusecases");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const loginData = req.body;
    const token = await UseruseCases.login(loginData);

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
