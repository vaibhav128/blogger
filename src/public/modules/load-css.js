const AttachCssLinkElement = (path) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = path;
  document.querySelector("head").appendChild(link);
};

export {AttachCssLinkElement}
