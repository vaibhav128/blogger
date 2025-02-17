const navbarHtml = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">MockSocial</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#" data-component="all-posts1">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-component="write-post1">
        Write
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-component="my-posts1">
        My Posts
      </a>
    </li>
  </ul>
  <div class="ml-auto px-2">
    <span id="nav-username" class="text-secondary font-weight-bold">username</span>
  </div>
</div>
</nav>`;

export  default navbarHtml ;
