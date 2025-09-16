const UserModel = require("../models/user.model");
const jwt = require("../lib/jwt");
const createError = require("http-errors");
const encryptions = require("../lib/encryptions");

const signUp = async (data) => {
  // 1. Verificar si ya existe un user con el mismo correo
  const userExists = await UserModel.exists({ email: data.email });
  if (userExists) {
    throw createError(409, "Email already exists");
  }

  // 2. Validar password
  if (!data.password) throw createError(400, "Password is required");

  // 3. Encriptar password
  const passwordEncrypted = encryptions.encrypt(data.password);

  // 4. Crear documento de usuario
  const newUser = await UserModel.create({
    ...data,
    password: passwordEncrypted,
  });

  return newUser;
};

const login = async (data) => {
  // find User in DB
  const user = await UserModel.findOne({ email: data.email }).select(
    "+password"
  );

  if (!user) throw createError(401, "Invalid credentials");

  const isValidPassword = encryptions.compareText(data.password, user.password);
  if (!isValidPassword) throw createError(401, "Invalid credentials");

  // return token
  const token = jwt.sing({ id: user._id, email: user.email });

  return token;
};

const getById = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw createError(404, "User not found");
  }
  return user;
};

const updateById = async (id, newData) => {
  const userToFound = await UserModel.findById(id);
  if (!userToFound) {
    throw createError(404, "User not found");
  }

  const user = await UserModel.findByIdAndUpdate(id, newData, { new: true });

  return user;
};

const deleteById = async (id) => {
  const userToFind = await UserModel.findById(id);

  if (!userToFind) {
    throw createError(404, "User not Found");
  }

  const userToDelete = await UserModel.findByIdAndDelete(id);
  return userToDelete;
};

module.exports = {
  login,
  signUp,
  getById,
  updateById,
  deleteById,
};
