import React from "react";
import RouterPath from "./Components/RouterPath/RouterPath";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterPath />
      </BrowserRouter>
    </div>
  );
}

export default App;
