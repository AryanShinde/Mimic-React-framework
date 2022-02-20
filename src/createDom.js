export const createDom = (element) => {
  const node =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode(element.props.nodeValue)
      : document.createElement(element.type);
  const notChild = (key) => key !== "children";

  Object.keys(element.props)

    .filter(notChild) //to not add childrens to attributes
    .forEach((prop) => (node[prop] = element.props[prop]));
  return node;
};
