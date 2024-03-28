import React from 'react';
import ReactDOM from 'react-dom/client';

// let pPhysicalDOM = document.createElement("p");
// pPhysicalDOM.innerText = "hello physical dom world";
// document.body.appendChild(pPhysicalDOM);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const pVirtualDOM = React.createElement("p", null, "Hello virtual DOM world!");
// document.getElementById()

root.render(pVirtualDOM);
