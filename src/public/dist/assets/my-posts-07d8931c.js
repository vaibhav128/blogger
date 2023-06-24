function t(){const a=JSON.parse(window.localStorage.user).id;fetch(`/api/posts?userId=${a}`).then(e=>e.json()).then(e=>{for(let s of e)document.querySelector("#posts-container").insertAdjacentHTML("beforeend",`
    <div class="col-4">
      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">${s.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${s.user.username}</h6>
          <p class="card-text">
            ${s.body.substr(0,200)}
            <a href="#">...read more</a>
          </p>
          <a href="#" class="card-link">Comment</a>
          <a href="#" class="card-link">Like</a>
        </div>
      </div>
    </div>
    `)})}t();
