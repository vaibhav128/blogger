import { loadPosts } from "/modules/load-posts.js";
// function loadPosts() {
//   $.get("/api/posts", (posts) => {
//     for (let p of posts) {
//       $("#posts-container").append(
//         $(`
//           <div class="col-4">
//             <div class="card m-2">
//               <div class="card-body">
//                 <h5 class="card-title">${p.title}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${
//                   p.user.username
//                 }</h6>
//                 <p class="card-text">
//                   ${p.body.substr(0, 200)}
//                   <a href="#">...read more</a>
//                 </p>
//                 <a href="#" class="card-link">Comment</a>
//                 <a href="#" class="card-link">Like</a>
//               </div>
//             </div>
//           </div>

//           `)
//       );
//     }
//   });
// }

//  refractor from jQuery to javascript
// debugger;
/* function loadPosts() {
  console.log("start loadpost");
  return fetch("/api/posts")
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
    });
} */
/* async function loadPosts() {
 const response = await fetch("/api/posts")
 const posts = await response.json();
    .then((response) => response.json())
    .then((posts) => {
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
    });
} */
// debugger;
// async function load() {
//   // const returnfetch = await loadPosts();
//   // console.log(returnfetch, "returnfetch");
//   console.log(loadPosts());
//   await applyPostEventListener();
// }
// async function applyPostEventListener() {
//   const post = document.querySelectorAll(".open-single-post");
//   console.log("in post", post);
//   for (let i = 0; i < post.length; i++) {
//     post[i].addEventListener("click", (event) => {
//       console.log(event);
//       console.log("print");
//     });
//   }
// }

const loadAllPostsPage = async () => {
  await loadPosts();

  const post = document.querySelectorAll(".open-single-post");
  for (let i = 0; i < post.length; i++) {
    post[i].addEventListener("click", async (event) => {
      event.preventDefault();
      // console.log(event.target.dataset.postid);
      const componentUrl = `/components/single-post.html`;

      const {loadSinglePost} = await import("/app/single-post.js");
         
          console.log(loadSinglePost);
          loadSinglePost(event.target.dataset.postid);

      // loader("#content", componentUrl);
    });
  }

}

loadAllPostsPage();
/* loadPosts().then(() => {
  const post = document.querySelectorAll(".open-single-post");
  for (let i = 0; i < post.length; i++) {
    post[i].addEventListener("click", (event) => {
      event.preventDefault();
      // console.log(event.target.dataset.postid);
      const componentUrl = `/components/single-post.html`;

      import("/app/single-post.js")
        .then((module) => {
          console.log(module);
          const {loadSinglePost} = module;
          console.log(loadSinglePost);
          loadSinglePost(event.target.dataset.postid);
        })


      // loader("#content", componentUrl);
    });
  }
}); */

// function loadSinglePost(postId) {
//   fetch(`/api/posts/${postId}`)
//     .then((response) => response.json())
//     .then((post) => {
//       console.log(post);

//       document.querySelector("#posts-container").innerHTML = `
//     <div class="jumbotron ">
//     <h1 class="display-7">${post.title}</h1>
//     <h2 class="display-11 text-muted">${post.user.username}</h1>
//     <p class="lead">${post.body}</p>
//     <hr class="my-4">
//     <p></p>
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//     </div>
//     `;
//     })
//     .then(
//       fetch(`/api/posts/comment/${postId}`)
//         .then((response) => response.json())
//         .then((comments) => {
//           for (let comment of comments) {
//             console.log(comment);
//             document.querySelector("#posts-container").insertAdjacentHTML(
//               "beforeend",
//               `
//               <div class="col-12"></div>
//           <h6 class=" mb-2 text-muted">${
//             comment.user.username
//           }</h6>
//           <p class=" mb-4">
//             ${comment.body}
//           </p>
//           </div>
//   `
//             );
//           }
//         })
//     );
// }
// debugger;
// load();


window.loadAllPostsPage = loadAllPostsPage;