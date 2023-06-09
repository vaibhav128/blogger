const deletePost =  () => {
    document
      .querySelector("#delete-post-btn")
      .addEventListener("click", (event) => {
        const postId = event.target.dataset.postid;
        console.log(postId);
        fetch(`/api/posts/${postId}`, {
          method: "DELETE",
        })
          .then((response) => {
            console.log(response, "response");
            return response.json();
          })
          .then((res) => {
            console.log(res, "res");
            if (res.deleted) {
              loader("#content", "/components/all-posts.html");
            }
          });
      });
}

export {deletePost}