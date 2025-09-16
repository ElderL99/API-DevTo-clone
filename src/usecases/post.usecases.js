const PostModel = require("../models/post.model");
const createError = require("http-errors");

const getAllPost = async () => {
  const allPost = await PostModel.find({}).populate("user");
  return allPost;
};

const getPostById = async (id) => {
  const getPost = await PostModel.findById(id).populate("user");
  if (!getPost) throw createError(404, "Post not found");

  return getPost;
};
const createPost = async (data, currentUserId) => {
  const title = data.title;
  const body = data.body;
  const post = {
    title: title,
    body: body,
    user: currentUserId,
    image: data.image,
  };

  return (await PostModel.create(post)).populate("user");
};

const updatePostById = async (id, newData, currentUserId) => {
  const post = await PostModel.findById(id);
  if (!post) throw createError(404, "Post not found");

  if (post.user.toString() !== currentUserId) {
    throw createError(403, "You are not authorized to update this post");
  }

  const user = newData.user;
  if (user) throw createError(400, "not allow chance de user");

  const updatedPost = await PostModel.findByIdAndUpdate(id, newData, {
    new: true,
  });

  return updatedPost;
};

const deletePostById = async (id, currentUserId) => {
  const Post = await PostModel.findById(id);
  if (!Post) throw createError(404, "Post not founded");

  if (Post.user.toString() !== currentUserId) {
    throw createError(403, "You are not authorized to delete this post");
  }

  const postToDelete = await PostModel.findByIdAndDelete(id);
  return postToDelete;
};

module.exports = {
  getAllPost,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
