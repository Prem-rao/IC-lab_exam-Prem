import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home"
import Destination from "./components/Destination";
import NavBar from './components/NavBar'
function App() {
  return (
   <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>} />
      <Route path="/destination" element={<Destination/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
