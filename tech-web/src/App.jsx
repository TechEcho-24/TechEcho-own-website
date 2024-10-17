
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login";
import { Signup } from "./components/auth/Signup";
import { Navbar } from "./components/home/Navbar";
import { Stars } from "./components/home/Stars";
import About from "./pages/About";
import Career from "./pages/Career";
import { Home } from "./pages/Home";
import Services from "./pages/Services";

import { FloatingActionButton } from "./components/home/FloatingActionButton";
import { Footer } from "./components/home/Footer";
import ScrollToTop from "./components/Scrolltop";
import Contact from "./pages/Contact";
import { Help } from "./pages/Help";
import { Development } from "./components/career/development";

function App() {
  return (
    <div className='relative min-h-screen bg-black overflow-x-hidden'>
      {/* Canvas for stars */}
      <Stars />

      {/* Main content */}
      <div className='relative inset-0'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/career/web-dev' element={<Development />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/help' element={<Help />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default App;
