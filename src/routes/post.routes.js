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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allpost = await postUseCases.getPostById(id);

    res.json({
      success: true,
      message: "Post",
      data: { allpost },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({ succes: false, message: error.message });
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const currentId = req.user.id;
    const newdata = req.body;
    const id = req.params.id;

    updatePost = await postUseCases.updatePostById(id, newdata, currentId);

    res.json({
      success: true,
      message: "Post was upateded successfully 🤖🎉",
      data: { newdata },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({ succes: false, message: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const currentId = req.user.id;

    const postToDeleted = await postUseCases.deletePostById(id, currentId);
    res.json({
      success: true,
      message: "Post was deleted successfully 🤖🎉",
      data: { postToDeleted },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({ succes: false, message: error.message });
  }
});

module.exports = router;
