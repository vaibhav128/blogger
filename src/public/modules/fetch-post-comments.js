const fetchPostComments = async (postId) => {
  const response = await fetch(`/api/posts/comment/${postId}`);
  const comments = await response.json();

  for (let comment of comments) {
    console.log(comment);
    document.querySelector("#posts-container").insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-12">
   <h5 class=" text-muted">${comment.user.username}</h5>
   <p class=" mb-4">
    ${comment.body}
   </p>
   <a class="btn btn-danger btn-lg" href="#" role="button">Delete</a>
   </div>
   `
    );
  }
};

export { fetchPostComments };
