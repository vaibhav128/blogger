const { Router } = require("express");
const {
  findAllPosts,
  createNewPost,
  findOnePost,
  deletePost,
} = require("../../controllers/posts");
const { commentsRoute } = require("./comments");

const route = Router();

route.use("/comment", commentsRoute);

route.get("/", async (req, res) => {
  const posts = await findAllPosts(req.query);

  res.status(200).send(posts);
});

route.get("/:id", async (req, res) => {
  const post = await findOnePost(req.params.id);
  res.status(200).send(post);
});

route.post("/", async (req, res) => {
  console.log(`POST /api/posts`, req.body);

  const { userId, title, body } = req.body;

  if (!userId || !title || !body) {
    return res.status(400).send({
      error: "Need userid, title and body to create post",
    });
  }

  const post = await createNewPost(userId, title, body);
  res.status(201).send(post);
});

route.patch("/:postId", async (req, res) => {
  // TODO: verify post owner and user editing post
  const post = await editPost(req.body, req.params.postId);
  res.status(200).send(post);
});
// TODO: Make delete route and Controller

route.delete("/:postId", async (req, res) => {
  const { postId } = req.params;
  console.log(postId);
  const post = await deletePost(postId);
  res.status(200).send({ post: post, deleted: true });
});

module.exports = {
  postsRoute: route,
};
