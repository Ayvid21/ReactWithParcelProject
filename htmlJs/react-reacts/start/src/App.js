import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            {/* <MyLoader size='small'/> */}
            <Header />
            <Body />
      // Footer
        </div>
    );
};
const rootElement = document.getElementById("root");

// const root = ReactDOM.createRoot(rootElement);
// root.render(<AppLayout />);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppLayout />);
}