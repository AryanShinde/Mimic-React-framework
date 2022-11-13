<h1 align="center">Mimic 🔮</h1>
<h2 align="center">Mimic is an under-work React framework which has capabilities to write JSX without using React's render or createComponent</h2>
</br>

<h2>Play with it here on <a href="https://codesandbox.io/s/mimic-react-framework-dv7tqs?file=/src/index.js">Code Sand Box</a></h2>

The component is created and rendered using ```Mimic.createElement``` and ```Mimic.render```,

So it does not rely on React for creating and adding elements to DOM, but takes help of JSX ecosystem that react provides.
Mimic uses ```Fibre tree``` to create child and siblings of the element. 

It works on concurrent mode which helps in rendering our tree without blocking the main thread, and resumes just after the main thread is idle to compute.

## Functionalities added till now ✔️: 
* Mimic.createElement
* Mimic.render

## Working on 👨‍💻: 
* Reconciliation

## Up Plans 📝:
* Hooks

## Architecture
<img width="804" alt="image" src="https://user-images.githubusercontent.com/73652194/201530967-5685451d-b8d9-4a15-93b3-f6b546faa3a0.png">
