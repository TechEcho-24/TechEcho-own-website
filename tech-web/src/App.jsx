import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layouts/Navbar";
import { Stars } from "./components/layouts/Stars";
import About from "./components/pages/About";
import Career from "./components/pages/Career";
import { Home } from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <div className='relative min-h-screen bg-black overflow-x-hidden'>
      {/* Canvas for stars */}
      <Stars />

      {/* Main content */}
      <div className='absolute inset-0'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/services' element={<Services />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
