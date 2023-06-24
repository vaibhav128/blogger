import { fetchPostcontent } from "/modules/fetch-post-content.js";
import { fetchPostComments } from "/modules/fetch-post-comments.js";

/*   const fetchPostcontent = async (postId) => {
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
  }; */

const loadSinglePost = async (postId) => {
  const { AttachCssLinkElement } = await import("/modules/load-css.js");
  AttachCssLinkElement("/components/single-post.css");
  await fetchPostcontent(postId);
  await fetchPostComments(postId);
  const { deletePost } = await import("/modules/delete-post.js");
  const { editPost } = await import("/modules/edit-post.js");
  deletePost();
  editPost();
};

const singlePostHtml = `<div class="container my-2">
<div class="row" id="posts-container">
</div>
</div>
<link rel="stylesheet" href="/components/single-post.css">
`;

export default singlePostHtml;
export { loadSinglePost };
//   return fetch(`/api/posts/${postId}`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((post) => {
//       console.log(post, "single post");

//       document.querySelector("#posts-container").innerHTML = `
//    <div class="jumbotron">
//      <div>
//        <h1:post-title class="display-4 post-editable-content" >${post.title}</h1:post-title>
//      </div>
//      <h2 class="display-20 text-muted">${post.user.username}</h1>
//      <div>
//        <p:post-body class="lead post-editable-content">${post.body}</p:post-body>
//      </div>
//      <hr class="my-4">
//      <a class="btn btn-danger btn-lg" id="delete-post-btn" href="#" role="button" data-postid = "${post.id}">Delete</a>
//      <span>
//      <a class="btn btn-success btn-lg" id="edit-post-btn" href="#" role="button">edit post</a>
//      </span>
//    </div>
//    `;
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
//              <div class="col-12">
//          <h5 class=" text-muted">${comment.user.username}</h5>
//          <p class=" mb-4">
//            ${comment.body}
//          </p>
//          <a class="btn btn-danger btn-lg" href="#" role="button">Delete</a>
//          </div>
//  `
//             );
//           }
//         })
//     );

// function loadSinglePost(postId) {
//   console.log(postId);
//    return fetch(`/api/posts/${postId}`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((post) => {
//       console.log(post, "single post");

//       document.querySelector("#posts-container").innerHTML = `
//     <div class="jumbotron">
//       <div>
//         <h1:post-title class="display-4 post-editable-content" >${post.title}</h1:post-title>
//       </div>
//       <h2 class="display-20 text-muted">${post.user.username}</h1>
//       <div>
//         <p:post-body class="lead post-editable-content">${post.body}</p:post-body>
//       </div>
//       <hr class="my-4">
//       <a class="btn btn-danger btn-lg" id="delete-post-btn" href="#" role="button" data-postid = "${post.id}">Delete</a>
//       <span>
//       <a class="btn btn-success btn-lg" id="edit-post-btn" href="#" role="button">edit post</a>
//       </span>
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
//               <div class="col-12">
//           <h5 class=" text-muted">${comment.user.username}</h5>
//           <p class=" mb-4">
//             ${comment.body}
//           </p>
//           <a class="btn btn-danger btn-lg" href="#" role="button">Delete</a>
//           </div>
//   `
//             );
//           }
//         })
//     );
// }

/* function createAndInsertNode(
  elementCreationDetails,
  elementDomInsertionDetails
) {
  const { elementName, elementAttributes } = elementCreationDetails;
  const elementNode = document.createElement(elementName);
  for (const [key, value] of Object.entries(elementAttributes)) {
    console.log(`${key} ${value}`);

    elementNode.setAttribute(key, value);
  }
  const { parentNode, position } = elementDomInsertionDetails;
  parentNode.insertBefore(elementNode, parentNode.children[position]);
  return elementNode;
}

function setCaretPostionToEnd(element) {} */

/*
loadSinglePost(postId)
   .then(() => {
    // textfunc();
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
  })
  .then(() => {
    document
      .querySelector("#edit-post-btn")
      .addEventListener("click", (event) => {
        // const postId = event.target.dataset.postid;

        const postEditableContent = document.querySelectorAll(
          ".post-editable-content"
        );

        for (let content = 0; content < postEditableContent.length; content++) {
          const editableNode = postEditableContent[content];
          const contentBody = editableNode.textContent;
          const editableContentParent = editableNode.parentNode;

          let NewElementObject = {};
          if (editableNode.localName == "p:post-body") {
            NewElementObject = {
              elementName: "div",
              elementAttributes: {
                contenteditable: "true",
                id: "postbodydiv",
              },
            };
          } else if (editableNode.localName == "h1:post-title") {
            NewElementObject = {
              elementName: "input",
              elementAttributes: {
                type: "text",
                value: contentBody,
              },
            };
          }

          const newNode = createAndInsertNode(NewElementObject, {
            parentNode: editableContentParent,
            position: 0,
          });
          newNode.classList = editableNode.classList;

          if (newNode.id == "postbodydiv") {
            const editPostDiv = document.querySelector("#postbodydiv");
            editPostDiv.textContent = editableNode.textContent;
          }
          if (newNode.id !== "postbodydiv") {
            // const selection = window.getSelection();
            // selection.removeAllRanges();
            // const range = document.createRange();
            // range.selectNodeContents(newNode);
            // range.collapse(false);
            // selection.addRange(range);
            newNode.selectionStart = newNode.selectionEnd =
              newNode.value.length;
            newNode.focus();
          }
          editableNode.remove();
        }

        console.log(postEditableContent);
        const editButton = document.querySelector("#edit-post-btn");
        const doneButton = createAndInsertNode(
          {
            elementName: "a",
            elementAttributes: {
              class: "btn btn-success btn-lg",
              id: "done-post-btn",
              role: "button",
            },
          },
          { parentNode: editButton.parentNode, position: 0 }
        );
        doneButton.textContent = "Done";
        editButton.remove();
        doneButton.addEventListener("click", (event) => {});
      });
  }); */
