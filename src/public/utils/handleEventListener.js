const handleEventListerner = (component) => {
  switch (component) {
    case "all-posts1":
      break;

    default:
      break;
  }
};
const contentBox = document.querySelector("#content");
const writePostEventListeners = [
  {
    domElementquery: "#write-btn",
    eventType: "click",
    listener: (event) => {
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
        // render myposts page
      });
    },
  },
];
const allPostEventListeners = [
  {
    domElementquery: "#content",
    eventType: "click",
    listener: async (event) => {
      console.log(event);
      event.preventDefault();
      if (event.target?.dataset?.postid) {
        const { default: html, loadSinglePost } = await import(
          "/app/single-post.js"
        );
        contentBox.innerHTML = html;
        loadSinglePost(event.target.dataset.postid);
      }
    },
  },
];
const myPostEventListeners = [
  {
    domElementquery: "#content",
    eventType: "click",
    listener: async (event) => {
      event.preventDefault();
      console.log(event);
      if (event.target?.dataset?.postid) {
        const { default: html, loadSinglePost } = await import(
          "/app/single-post.js"
        );
        contentBox.innerHTML = html;
        loadSinglePost(event.target.dataset.postid);
      }
    },
  },
];

const addEventListeners = (componentEventListeners) => {
  componentEventListeners.forEach((eventListener) => {
    const { domElementquery, eventType, listener } = eventListener;
    document
      .querySelector(domElementquery)
      .addEventListener(eventType, listener);
  });
};
const removeEventListeners = (componentEventListeners) => {
  componentEventListeners.forEach((eventListener) => {
    const { domElementquery, eventType, listener } = eventListener;
    document
      ?.querySelector(domElementquery)
      ?.removeEventListener(eventType, listener);
  });
};

export {
  addEventListeners,
  removeEventListeners,
  allPostEventListeners,
  writePostEventListeners,
  myPostEventListeners,
};
