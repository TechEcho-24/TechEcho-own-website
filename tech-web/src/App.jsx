import React from "react";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Career from "./components/pages/Career";
import Services from "./components/pages/Services";
import SignIn from "./components/pages/SignIn";
import { Stars } from "./components/layouts/Stars";

function App() {
  return (
    <div className='relative min-h-screen bg-black'>
      {/* Canvas for stars */}
      <Stars />

      {/* Main content */}
      <div className='absolute inset-0'>
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
