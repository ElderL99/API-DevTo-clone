const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Devto APIv1" });
});

module.exports = app;
