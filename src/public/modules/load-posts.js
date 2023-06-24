const loadPosts = async () => {
  console.log("start loadpost");
  const response = await fetch("/api/posts");
  const posts = await response.json();
  console.log("posts are", posts);
  const postsContainer = document.querySelector("#posts-container")
  postsContainer.innerHTML =''
  for (let p of posts) {
    postsContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="col-4">
    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
        <p class="card-text">
          ${p.body.substr(0, 200)}
          <a href="#" class="open-single-post" data-postId = "${
            p.id
          }">...read more</a>
        </p>
        <a href="#" class="card-link">Comment</a>
        <a href="#" class="card-link">Like</a>
      </div>
    </div>
  </div>
`
    );
  }

  /*  return fetch("/api/posts")
    .then((response) => {
      console.log("inside first .then");
      return response.json();
    })
    .then((posts) => {
      console.log("inside second .then");
      for (let p of posts) {
        document.querySelector("#posts-container").insertAdjacentHTML(
          "beforeend",
          `
        <div class="col-4">
        <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
            <p class="card-text">
              ${p.body.substr(0, 200)}
              <a href="#" class="open-single-post" data-postId = "${
                p.id
              }">...read more</a>
            </p>
            <a href="#" class="card-link">Comment</a>
            <a href="#" class="card-link">Like</a>
          </div>
        </div>
      </div>
    `
        );
      }
      // return "hello";
    }); */
};

export { loadPosts };
