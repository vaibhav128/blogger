const { Posts, Users } = require("../db/models");

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  });

  return post;
}

/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */
async function findAllPosts(query) {
  let where = {};
  if (query.userId) {
    where.userId = query.userId;
  }

  const posts = await Posts.findAll({
    include: [Users],
    where,
  });

  // console.log(posts);
  return posts;
}

async function findOnePost(id) {
  const post = await Posts.findByPk(id, { include: [Users] });
  return post;
}

async function editPost(editQuery, postId) {
  await Posts.update(editQuery, {
    where: {
      id: postId,
    },
  });
}

async function deletePost(postId) {
  return await Posts.destroy({
    where: {
      id :postId,
    },
  });
}

module.exports = {
  createNewPost,
  findAllPosts,
  findOnePost,
  editPost,
  deletePost,
};

/* Test Code */

/* async function task() {
  // console.log(
  //   await createNewPost(
  //     1,
  //     'This is a sample post',
  //     'Body of the post goes here'
  //   )
  // ),
  // console.log(
  //   await createNewPost(
  //     2,
  //     'Another sample post',
  //     'Some body example here as well'
  //   )
  // )
  const posts = await findAllPosts(1);
  console.log(posts);
  for (let p of posts) {
    // console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
  }
  findOnePost(1);
}

task(); */
