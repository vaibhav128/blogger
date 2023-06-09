const { Router } = require("express");

const {
  createNewComment,
  findAllComments,
  deleteComment,
  editComment,
} = require("../../controllers/comments");

const commentsRoute = Router();
commentsRoute.delete("/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(400).send({
      error: "Need specify comment to delete",
    });
  }

  const comment = await deleteComment(id);
  console.log(comment);
  res.status(200).send({comment: comment});
});

commentsRoute.get("/:id", async (req, res) => {
  const comments = await findAllComments({ postId: req.params.id });
  res.status(200).send(comments);
});

commentsRoute.post("/", async (req, res) => {
  console.log(`COMMENT /api/comments`, req.body);

  const { userId, postId, body } = req.body;

  if (!userId || !postId || !body) {
    return res.status(400).send({
      error: "Need userid, postId and body to create comment",
    });
  }

  const comment = await createNewComment(postId, userId, body);
  res.status(201).send(comment);
});
commentsRoute.patch("/:id", async (req, res) => {
  // TODO: verify comment owner and user editing comment
  const comment = await editComment(req.body, req.params.id);
  res.status(200).send(comment);
});
module.exports = {
  commentsRoute,
};
