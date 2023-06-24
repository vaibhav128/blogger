const e=async()=>await(await fetch("/api/posts")).json(),c=s=>`
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
  </div>`,n=async()=>{const s=await e();return o(s)},r=n(),l=await r;export{l as default};
