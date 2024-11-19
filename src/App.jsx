import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = () => {
  const location = useLocation();  // Get the current route path

  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/signin' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {location.pathname !== '/signin' && <Footer />}
    </>
  );
};

export default App;
