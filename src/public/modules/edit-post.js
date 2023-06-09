import { createAndInsertNode } from "/modules/create-node.js";

const editPost = () => {
    document
      .querySelector("#edit-post-btn")
      .addEventListener("click", (event) => {
        // const postId = event.target.dataset.postid;

        const postEditableContent = document.querySelectorAll(
          ".post-editable-content"
        );

        for (let content = 0; content < postEditableContent.length; content++) {
          const editableNode = postEditableContent[content];
          const contentBody = editableNode.textContent;
          const editableContentParent = editableNode.parentNode;

          let NewElementObject = {};
          if (editableNode.localName == "p:post-body") {
            NewElementObject = {
              elementName: "div",
              elementAttributes: {
                contenteditable: "true",
                id: "postbodydiv",
              },
            };
          } else if (editableNode.localName == "h1:post-title") {
            NewElementObject = {
              elementName: "input",
              elementAttributes: {
                type: "text",
                value: contentBody,
              },
            };
          }

          const newNode = createAndInsertNode(NewElementObject, {
            parentNode: editableContentParent,
            position: 0,
          });
          newNode.classList = editableNode.classList;

          if (newNode.id == "postbodydiv") {
            const editPostDiv = document.querySelector("#postbodydiv");
            editPostDiv.textContent = editableNode.textContent;
          }
          if (newNode.id !== "postbodydiv") {
            // const selection = window.getSelection();
            // selection.removeAllRanges();
            // const range = document.createRange();
            // range.selectNodeContents(newNode);
            // range.collapse(false);
            // selection.addRange(range);
            newNode.selectionStart = newNode.selectionEnd =
              newNode.value.length;
            newNode.focus();
          }
          editableNode.remove();
        }

        console.log(postEditableContent);
        const editButton = document.querySelector("#edit-post-btn");
        const doneButton = createAndInsertNode(
          {
            elementName: "a",
            elementAttributes: {
              class: "btn btn-success btn-lg",
              id: "done-post-btn",
              role: "button",
            },
          },
          { parentNode: editButton.parentNode, position: 0 }
        );
        doneButton.textContent = "Done";
        editButton.remove();
        doneButton.addEventListener("click", (event) => {});
      });
}

export {editPost}