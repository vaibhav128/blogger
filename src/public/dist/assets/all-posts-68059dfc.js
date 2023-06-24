import{_ as l}from"./index-0c7036bd.js";const n=async()=>{console.log("start loadpost");const t=await(await fetch("/api/posts")).json();console.log("posts are",t);const o=document.querySelector("#posts-container");o.innerHTML="";for(let s of t)o.insertAdjacentHTML("beforeend",`
    <div class="col-4">
    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">${s.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${s.user.username}</h6>
        <p class="card-text">
          ${s.body.substr(0,200)}
          <a href="#" class="open-single-post" data-postId = "${s.id}">...read more</a>
        </p>
        <a href="#" class="card-link">Comment</a>
        <a href="#" class="card-link">Like</a>
      </div>
    </div>
  </div>
`)},a=async()=>{await n();const e=document.querySelectorAll(".open-single-post");for(let t=0;t<e.length;t++)e[t].addEventListener("click",async o=>{o.preventDefault();const{loadSinglePost:s}=await l(()=>import("./single-post-f0884996.js"),["assets/single-post-f0884996.js","assets/index-0c7036bd.js","assets/index-bdea6e08.css"]);console.log(s),s(o.target.dataset.postid)})};a();window.loadAllPostsPage=a;
