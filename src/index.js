/** @jsxRuntime classic */
// import React from "react";
// import ReactDom from "react-dom";
import Mimic from "./mimic";

/** @jsx Mimic.createElement */
const element = () => {
  const hell = "hee";
  return (
    <div>
      <h1>helooo</h1>
      <h2>its workinggg</h2>
      <h4 style="background-color: red; color: white">{hell}</h4>
    </div>
  );
};
// const test = document.createElement("h1");

// console.log(createElement("h1", { title: "hello" }, "this is text"));
const container = document.querySelector("#root");
// container.appendChild(test);
console.log(container);

Mimic.render(element(), container);
