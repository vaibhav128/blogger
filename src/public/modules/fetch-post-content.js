const fetchPostcontent = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`);
  console.log(response);
  const post = await response.json();
  console.log(post, "single post data from database");

  document.querySelector("#posts-container").innerHTML = `
    <div class="jumbotron">
      <div>
        <h1:post-title class="display-4 post-editable-content" >${post.title}</h1:post-title>
      </div>
      <h2 class="display-20 text-muted">${post.user.username}</h1>
      <div>
        <p:post-body class="lead post-editable-content">${post.body}</p:post-body>
      </div>
      <hr class="my-4">
      <a class="btn btn-danger btn-lg" id="delete-post-btn" href="#" role="button" data-postid = "${post.id}">Delete</a>
      <span>
      <a class="btn btn-success btn-lg" id="edit-post-btn" href="#" role="button">edit post</a>
      </span>
    </div>
    `;
};

export { fetchPostcontent };
