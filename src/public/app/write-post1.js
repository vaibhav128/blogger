const writePostHtml = `<div class="container my-2">
<h1 class="h1 text-center">Write Post</h1>

<!-- Write Post form -->
<form>
  <div class="form-group">
    <label for="p-title">Post Title</label>
    <input type="text"
      class="form-control form-control-lg"
      id="p-title"
      placeholder="What is on your mind ?"
      rows="3"
    ></input>
  </div>
  <div class="form-group">
    <label for="p-body">Post Body</label>
    <textarea
      class="form-control form-control-sm"
      id="p-body"
      placeholder="Tell us more about it"
      rows="4"
    ></textarea>
  </div>
  <button type="submit" id="write-btn" class="btn btn-primary">Submit</button>
</form>
</div>`;

const writePostJs = () => {
  document.querySelector("#write-btn").addEventListener("click", (event) => {
    event.preventDefault();
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
      
    });
  });
};

export default writePostHtml;
export { writePostJs };
