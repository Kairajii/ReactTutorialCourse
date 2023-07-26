import React from "react";
import "./App.css";

import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
        </div>
  );
}

export default App;
