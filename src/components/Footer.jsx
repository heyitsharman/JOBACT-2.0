import React from 'react';
import './Footer.css';

const Footer = () => {
    return <>
    <footer>
  <div className="footerContainer">
   
    <div className="footernav">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="jobs.html">Jobs</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="login.html">SignIn</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

    </>
}

export default Footer;