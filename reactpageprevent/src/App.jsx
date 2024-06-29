import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import Routing from "./Router/Routing";

function App() {
  return (
    <>
      <RouterProvider router={Routing} />
    </>
  );
}

export default App;
