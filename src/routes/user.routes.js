const express = require("express");
const userCases = require("../usecases/userusecases");
const router = express.Router();

router.post("/", async (req, res) => {
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

module.exports = router;
