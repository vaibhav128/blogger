const n=()=>{document.querySelector("#delete-post-btn").addEventListener("click",o=>{const t=o.target.dataset.postid;console.log(t),fetch(`/api/posts/${t}`,{method:"DELETE"}).then(e=>(console.log(e,"response"),e.json())).then(e=>{console.log(e,"res"),e.deleted&&loader("#content","/components/all-posts.html")})})};export{n as deletePost};
