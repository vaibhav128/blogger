
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

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  loader("#navbar", "/components/navbar.html", loginIfNeeded);
  loader("#footer", "/components/footer.html");
  loader("#content", "/components/all-posts.html");
});


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
