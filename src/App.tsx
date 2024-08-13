import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RouterCustom from "./router";
function App() {
  return (
    <BrowserRouter>
    <RouterCustom/>
  </BrowserRouter>
  );
}

export default App;
