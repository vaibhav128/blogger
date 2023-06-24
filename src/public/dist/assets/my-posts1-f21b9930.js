const e=async s=>await(await fetch(`/api/posts?userId=${s}`)).json(),c=s=>`
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
    `,o=s=>`<div class="container my-2">
    <h1 class="h1 text-center">Recent Posts</h1>
    
    <div class="row" id="posts-container">
    ${s.reduce((t,a)=>t+c(a),"")}
    </div>
    </div>`,r=async()=>{const s=JSON.parse(window.localStorage.user).id,t=await e(s);return o(t)},n=r(),d=await n;export{d as default};
