import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
// import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router

const App = () => {
    return <>
        <Router> {/* Wrap your app inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path= "/about" element={<About />}/>
      </Routes>
      <Footer />
    </Router>
        
        
    </>
}
export default App;