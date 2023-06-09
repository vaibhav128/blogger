const { Comments, Users, Posts } = require("../db/models");

async function createNewComment(postId, userId, body) {
  const comment = await Comments.create({
    body,
    userId,
    postId,
  });

  return comment;
}

async function findAllComments(query) {
  let where = {};
  if (query.postId) {
    where.postId = query.postId;
  }

  const comments = await Comments.findAll({
    include: [Users],
    where,
  });

  return comments;
}
async function editComment(editQuery, commentId) {
  const comment = await Comments.update(editQuery, {
    where: {
      id: commentId,
    },
  });
  return comment;
}

async function deleteComment(id) {
  let comment = await Comments.destroy({
    where: {
      id,
    },
  });
  return comment;
}

module.exports = {
  createNewComment,
  findAllComments,
  editComment,
  deleteComment,
};

/* Test Code */

/* asy nc function task() {
  //   console.log(await createNewComment(1, 2, "Body of the comment goes here")),
  //     console.log(
  //       await createNewComment(1, 2, "Some comment body example here as well")
  //     );
  // const comments = await findAllComments({ postId: 1 });
  const comments = await deleteComment(1);
  console.log(comments);
  // for (let Comment of comments) {
  //   console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
  // }
}

task(); */
