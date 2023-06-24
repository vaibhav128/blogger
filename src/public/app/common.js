import {
  addEventListeners,
  allPostEventListeners,
  myPostEventListeners,
  removeEventListeners,
  writePostEventListeners,
} from "../utils/handleEventListener.js";
// import allPostHtml from "./all-posts1.js";
import footerHtml from "./footer1.js";
import navbarHtml from "./navbar1.js";

function loginIfNeeded() {
  window.currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  if (!currentUser) {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((user) => {
        console.log(user);
        if (user) {
          console.log("registered current user as ", user.username);
          window.localStorage.user = JSON.stringify(user);
          currentUser = user;
          document.querySelector("#nav-username").textContent =
            currentUser.username;
        }
      });
  } else {
    console.log("resuming session as ", currentUser.username);
    document.querySelector("#nav-username").textContent = currentUser.username;
  }
}

// Refracted code omitted jquery

const routes = {
  "/": "all-posts1",
  "/write-post": "write-post1",
  "/my-posts": "my-posts1",
};
if (document.readyState !== "loading") {
  console.log("init");
  const pathname = window.location.pathname;
  const contentBox = document.querySelector("#content");
  if (routes[pathname]) {
    document.querySelector("#navbar").innerHTML = navbarHtml;
    loginIfNeeded();
    document.querySelector("#footer").innerHTML = footerHtml;
    
    switch (routes[pathname]) {
      case "all-posts1": {
        const { default: html } = await import("../app/all-posts1.js");
        console.log(html);
        // removeEventListeners(writePostEventListeners);
        removeEventListeners(myPostEventListeners);
        contentBox.innerHTML = html;

        addEventListeners(allPostEventListeners);
        break;
      }
      case "write-post1": {
        const { default: html, writePostJs } = await import(
          `../app/${routes[pathname]}.js`
        );
        removeEventListeners(allPostEventListeners);
        removeEventListeners(myPostEventListeners);
        contentBox.innerHTML = html;

        addEventListeners(writePostEventListeners);
        break;
      }
      case "my-posts1": {
        const { default: html } = await import(`../app/${routes[pathname]}.js`);
        // removeEventListeners(allPostEventListeners);
        // removeEventListeners(writePostEventListeners);
        contentBox.innerHTML = html;

        addEventListeners(myPostEventListeners);
        break;
      }
    }
  }
} else {
  document.addEventListener("DOMContentLoaded", async (event) => {
    console.log(event);
    const contentBox = document.querySelector("#content");
    const pathname = window.location.pathname;
    if (routes[pathname]) {
      switch (routes[pathname]) {
        case "all-posts1": {
          const { default: html } = await import(`../app/${routes[pathname]}.js`);
          // removeEventListeners(writePostEventListeners);
          removeEventListeners(myPostEventListeners);
          contentBox.innerHTML = html;

          addEventListeners(allPostEventListeners);
          break;
        }
        case "write-post1": {
          const { default: html, writePostJs } = await import(
            `../app/${routes[pathname]}.js`
          );
          removeEventListeners(allPostEventListeners);
          removeEventListeners(myPostEventListeners);
          contentBox.innerHTML = html;

          addEventListeners(writePostEventListeners);
          break;
        }
        case "my-posts1": {
          const { default: html } = await import(`../app/${routes[pathname]}.js`);
          // removeEventListeners(allPostEventListeners);
          // removeEventListeners(writePostEventListeners);
          contentBox.innerHTML = html;

          addEventListeners(myPostEventListeners);
          break;
        }
      }
    }
  });
}
const setInnerHTML = function (element, html) {
  element.innerHTML = html;
  Array.from(element.querySelectorAll("script")).forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
};

const fetcher = (path, element, ...restArgs) => {
  fetch(`${path}`)
    .then((response) => response.text())
    .then((html) => {
      setInnerHTML(element, html);
    })
    .then(() => {
      restArgs.forEach((arg) => {
        arg();
      });
    })
    .catch((err) => {
      console.log("error occured in fetcher", err);
    });
};

const loader = (query, path, ...restArgs) => {
  // used to load html in the query element
  const element = document.querySelector(query);
  fetcher(path, element, ...restArgs);
};

// loader("#navbar", "/components/navbar.html", loginIfNeeded);
// loader("#footer", "/components/footer.html");
// loader("#content", "/components/all-posts.html");

const handleClick = async (event) => {
  switch (event.target.dataset.component) {
    case "all-posts1": {
      window.history.pushState({}, "", window.location.origin);
      const { default: html } = await import(
        `../app/${event.target.dataset.component}.js`
      );
      // removeEventListeners(writePostEventListeners);
      removeEventListeners(myPostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(allPostEventListeners);
      break;
    }
    case "write-post1": {
      window.history.pushState({}, "", window.location.origin + "/write-post");
      const { default: html, writePostJs } = await import(
        `../app/${event.target.dataset.component}.js`
      );
      removeEventListeners(allPostEventListeners);
      removeEventListeners(myPostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(writePostEventListeners);
      break;
    }
    case "my-posts1": {
      window.history.pushState({}, "", window.location.origin + "/my-posts");
      const { default: html } = await import(
        `../app/${event.target.dataset.component}.js`
      );
      // removeEventListeners(allPostEventListeners);
      // removeEventListeners(writePostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(myPostEventListeners);

      break;
    }
  }
};

// document.querySelector("#navbar").innerHTML = navbarHtml;
// loginIfNeeded();

const contentBox = document.querySelector("#content");
// contentBox.innerHTML = allPostHtml;

// document.querySelector("#footer").innerHTML = footerHtml;

let navlinks = document.querySelectorAll(".navbar-nav .nav-link");
console.log(navlinks);
navlinks.forEach(function (currentLink) {
  currentLink.addEventListener("click", (event) => {
    event.preventDefault();
    handleClick(event);
  });
});

// content event listener

// contentBox.addEventListener("click", async (event) => {
//   console.log(event);
//   if (event.target?.dataset?.postid) {
//     const { default: html, loadSinglePost } = await import(
//       "/app/single-post.js"
//     );
//     contentBox.innerHTML = html;
//     loadSinglePost(event.target.dataset.postid);
//   }
// });

// addEventListeners(allPostEventListeners);

window.addEventListener("popstate", async (event) => {
  console.log("run popstate");
  switch (routes[window.location.pathname]) {
    case "all-posts1": {
      // window.history.pushState({}, "", window.location.origin);
      const { default: html } = await import(
        `../app/${routes[window.location.pathname]}.js`
      );
      // removeEventListeners(writePostEventListeners);
      removeEventListeners(myPostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(allPostEventListeners);
      break;
    }
    case "write-post1": {
      // window.history.pushState({}, "", window.location.origin + "/write-post");
      const { default: html, writePostJs } = await import(
        `../app/${routes[window.location.pathname]}.js`
      );
      removeEventListeners(allPostEventListeners);
      removeEventListeners(myPostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(writePostEventListeners);
      break;
    }
    case "my-posts1": {
      // window.history.pushState({}, "", window.location.origin + "/my-posts");
      const { default: html } = await import(
        `../app/${routes[window.location.pathname]}.js`
      );
      // removeEventListeners(allPostEventListeners);
      // removeEventListeners(writePostEventListeners);
      contentBox.innerHTML = html;

      addEventListeners(myPostEventListeners);

      break;
    }
  }
});
