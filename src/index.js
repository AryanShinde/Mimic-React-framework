/** @jsxRuntime classic */
// import React from "react";
// import ReactDom from "react-dom";
import Mimic from './mimic';
import Test from './components/Test';
import heroo from './images/heroo.png';
/** @jsx Mimic.createElement */

const element = () => {
  const hell = 'hee';

  return (
    <div>
      <nav style="display: flex; justify-content: space-between; align-items: center; padding:0.5rem 5rem; position:sticky; top:0%; background-color: white;box-shadow: 2px 2px 10px #bcc8df; margin:0rem;border-radius: 2rem; z-index:8">
        <div style="font-size:4rem">🔮</div>
        <div style="font-size: 1.6rem">Aryan Shinde - 24</div>
      </nav>

      <div style="display: flex; justify-content: space-between; align-items: center;height:80vh;margin:1rem 1.5rem">
        <div
          className="left"
          style="width:45%; margin-left:3rem; margin-top:-4rem"
        >
          <h1 style="font-size:7rem;">Mimic.</h1>

          <h4 style="color:#ea4c89; font-size:2rem; margin-top:-2rem; position:relative;">
            What it does?
          </h4>
          <p style="font-size:1.2rem">
            -Mimic is an under-work React framework which has capabilities to
            write JSX without using React's render or createComponent.
          </p>
          <button style="background:#135ce7; border:0rem; border-radius:1rem; padding:1rem; font-size:1.2rem">
            <a
              style="text-decoration:none; color: white"
              href="https://github.com/AryanShinde/Mimic-React-framework"
            >
              Check the Project!
            </a>
          </button>
        </div>
        <div className="right">
          <img style="width:38rem; height:30rem" src={heroo} alt="" />
        </div>
      </div>
    </div>
  );
};
// const test = document.createElement("h1");

// console.log(createElement("h1", { title: "hello" }, "this is text"));
const container = document.querySelector('#root');
// container.appendChild(test);
console.log(container);

Mimic.render(element(), container);
