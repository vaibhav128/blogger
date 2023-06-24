const fetchPostsData = async (userId) => {
    const response = await fetch(`/api/posts?userId=${userId}`);
    const postsData = await response.json();
    return postsData;
  };
  
  const convertPostDataToHtml = (post) =>
    `
    <div class="col-4">
    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
        <p class="card-text">
          ${post.body.substr(0, 200)}
          <a href="#" class="open-single-post" data-postId = "${
            post.id
          }">...read more</a>
        </p>
        <a href="#" class="card-link">Comment</a>
        <a href="#" class="card-link">Like</a>
      </div>
    </div>
  </div>
    `;
  
  const generatepostsHtml = (posts) =>
    `<div class="container my-2">
    <h1 class="h1 text-center">Recent Posts</h1>
    
    <div class="row" id="posts-container">
    ${posts.reduce(
      (postHtml, post) => postHtml + convertPostDataToHtml(post),
      ""
    )}
    </div>
    </div>`;
  
  const generateMyPosts = async () => {
    const userId = JSON.parse(window.localStorage.user).id;
   const postData= await fetchPostsData(userId)
  
    return generatepostsHtml(postData);
  };
  const myPostsHtml = generateMyPosts()
  
  export default await myPostsHtml ;
  