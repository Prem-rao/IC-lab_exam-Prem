import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home"
import Destination from "./components/Destination";
import NavBar from './components/NavBar'
import About from './components/About'
import Footer from './components/Footer'
import 'boxicons'
function App() {
  return (
   <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
