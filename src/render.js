import { createDom } from "./createDom";

let nextUnitOfWork = null;

export const render = (elements, container) => {
  nextUnitOfWork = {
    dom: container,

    props: {
      children: [elements],
    },
  };
};

const WorkLoop = (deadline) => {
  let almostDead = false;
  while (nextUnitOfWork && !almostDead) {
    nextUnitOfWork = performNextUnitOfWork(nextUnitOfWork);

    almostDead = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(WorkLoop);
};
requestIdleCallback(WorkLoop);

const performNextUnitOfWork = (fibre) => {
  if (fibre.dom == null) {
    fibre.dom = createDom(fibre);
  }
  if (fibre.parent) {
    fibre.parent.dom.appendChild(fibre.dom);
  }
  const elements = fibre.props.children;
  let index = 0;
  let prevSibling = null;

  while (index < elements.length) {
    const element = elements[index];
    const newFibre = {
      dom: null,
      type: element.type,
      props: element.props,
      parent: fibre,
      sibling: null,
    };
    if (index === 0) {
      fibre.child = newFibre;
    } else {
      prevSibling.sibling = newFibre;
    }
    prevSibling = newFibre;
    index += 1;
  }
  if (fibre.child) {
    return fibre.child;
  }
  let nextFibre = fibre;
  while (nextFibre) {
    if (nextFibre.sibling) {
      return nextFibre.sibling;
    }
    nextFibre = nextFibre.parent;
  }
};
