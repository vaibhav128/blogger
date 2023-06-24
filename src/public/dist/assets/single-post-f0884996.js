import{_ as n}from"./index-0c7036bd.js";const a=async s=>{const e=await fetch(`/api/posts/${s}`);console.log(e);const t=await e.json();console.log(t,"single post data from database"),document.querySelector("#posts-container").innerHTML=`
    <div class="jumbotron">
      <div>
        <h1:post-title class="display-4 post-editable-content" >${t.title}</h1:post-title>
      </div>
      <h2 class="display-20 text-muted">${t.user.username}</h1>
      <div>
        <p:post-body class="lead post-editable-content">${t.body}</p:post-body>
      </div>
      <hr class="my-4">
      <a class="btn btn-danger btn-lg" id="delete-post-btn" href="#" role="button" data-postid = "${t.id}">Delete</a>
      <span>
      <a class="btn btn-success btn-lg" id="edit-post-btn" href="#" role="button">edit post</a>
      </span>
    </div>
    `},i=async s=>{const t=await(await fetch(`/api/posts/comment/${s}`)).json();for(let o of t)console.log(o),document.querySelector("#posts-container").insertAdjacentHTML("beforeend",`
      <div class="col-12">
   <h5 class=" text-muted">${o.user.username}</h5>
   <p class=" mb-4">
    ${o.body}
   </p>
   <a class="btn btn-danger btn-lg" href="#" role="button">Delete</a>
   </div>
   `)},l=async s=>{const{AttachCssLinkElement:e}=await n(()=>import("./load-css-e0b51fcc.js"),[]);e("/components/single-post.css"),await a(s),await i(s);const{deletePost:t}=await n(()=>import("./delete-post-470fb447.js"),[]),{editPost:o}=await n(()=>import("./edit-post-fcc42556.js"),[]);t(),o()},d=`<div class="container my-2">
<div class="row" id="posts-container">
</div>
</div>
<link rel="stylesheet" href="/components/single-post.css">
`;export{d as default,l as loadSinglePost};
