const express = require("express");
const RouterUser = require("./routes/user.routes");
const RouterAuth = require("../src/routes/auth.routes");
const app = express();

app.use(express.json());

app.use("/auth", RouterAuth);
app.use("/user", RouterUser);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Devto APIv1" });
});

module.exports = app;
