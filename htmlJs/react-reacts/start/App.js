import React from "react";
import ReactDOM from "react-dom/client";

// React Element => babel transpiles it to object and that it then rendered as HTML element onto the browser.
const Heading = () => <h2 id="heading">This is my second heading!</h2>;
const element = <span>React element </span>

const heading2 = (
    <div className='container-second'>
        <h3>This is my element's heading</h3>
        <h4>{element}</h4>
    </div>
);

// React Component -> 1. Class Based components - old , 2. Functional components - new
// React functional component is a function that returns some piece of JSX(react element)
const NewHeading = () => (
  <div className="container">
    <h1>React Functional Component 🚀</h1>
    <Heading />
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NewHeading />);
