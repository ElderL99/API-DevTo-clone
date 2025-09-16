const express = require("express");
const auth = require("../middlewares/auth/auth");
const postUseCases = require("../usecases/post.usecases");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allpost = await postUseCases.getAllPost();

    res.json({
      success: true,
      message: "All posts",
      data: { allpost },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({ succes: false, message: error.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const currentId = req.user.id;
    const data = req.body;
    const createPost = await postUseCases.createPost(data, currentId);

    res.json({
      success: true,
      message: "Post was created successfully 🤖🎉",
      data: { createPost },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({ succes: false, message: error.message });
  }
});

module.exports = router;
