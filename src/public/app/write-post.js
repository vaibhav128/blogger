// $('#write-btn').click(() => {
//     const userId = JSON.parse(window.localStorage.user).id
//     const title = $('#p-title').val()
//     const body = $('#p-body').val()
  
//     $.post('/api/posts', { userId, title, body }, (data) => {
//       $('#content').load('/components/my-posts.html')
//       $('.nav-item .active').removeClass('active')
//       $("[data-components='my-posts']").addClass('active')
//     })
//   })

  document.querySelector("#write-btn").addEventListener("click", (event) => {
    const userId = JSON.parse(window.localStorage.user).id;
    const title = document.querySelector("#p-title").value;
    const body = document.querySelector("#p-body").value;
  
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, title, body }),
    }).then((response) => {
      loader("#content", "/components/my-posts.html");
    });
  });