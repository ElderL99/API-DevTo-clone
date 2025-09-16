const jwt = require("../../lib/jwt");
const userCases = require("../../usecases/user.useCases");
const createError = require("http-errors");

const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1];

    if (!token) {
      throw createError(401, "Token is required in authorization header");
    }

    const payload = jwt.verify(token);

    // Obtener el usuario real
    const user = await userCases.getById(payload.id);
    if (!user) {
      throw createError(401, "User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(error.status || 401).json({ message: error.message });
  }
};

module.exports = auth;
