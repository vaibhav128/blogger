function createAndInsertNode(
  elementCreationDetails,
  elementDomInsertionDetails
) {
  const { elementName, elementAttributes } = elementCreationDetails;
  const elementNode = document.createElement(elementName);
  for (const [key, value] of Object.entries(elementAttributes)) {
    console.log(`${key} ${value}`);

    elementNode.setAttribute(key, value);
  }
  const { parentNode, position } = elementDomInsertionDetails;
  parentNode.insertBefore(elementNode, parentNode.children[position]);
  return elementNode;
}

export { createAndInsertNode };
