export const createElement = (type, props, ...children) => {
  console.log("here");
  return {
    type: type,
    props: {
      ...props,
      children: children.map((c) => {
        return typeof c === "object" ? c : createTextElement(c);
      }),
    },
  };
};

const createTextElement = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};
