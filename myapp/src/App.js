import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home"
import Destination from "./components/Destination";
function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
