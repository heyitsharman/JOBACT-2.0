
import './About.css'
import React, { useState } from "react";

const About = () => {
    return <>
     <div className="container text-center">
    <div className="about-header">
      <h1>About Us</h1>
      <p className="lead">Empowering your career journey</p>
    </div>
  </div>
  <div className="container mission-vision-cards">
    <div className="row text-center">
      <div className="col-md-6 mb-4">
        <div className="card p-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">
              We connect job seekers with top job opportunities, helping people
              and businesses succeed.
            </p>
            <i className="fas fa-bullseye fa-3x icon" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card p-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              We aim to make job hunting simple and effective, matching talent
              with opportunity.
            </p>
            <i className="fas fa-lightbulb fa-3x icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container text-center choose">
    <h2>Why Choose Us?</h2>
    <div className="why-choose-us">
      <ul className="list-group list-group-flush">
        <li>
          <i className="fas fa-check-circle" /> Wide range of job listings in
          different fields.
        </li>
        <li>
          <i className="fas fa-check-circle" /> Personalized job recommendations
          and alerts.
        </li>
        <li>
          <i className="fas fa-check-circle" /> Tools for employers to find the
          best talent.
        </li>
        <li>
          <i className="fas fa-check-circle" /> Easy-to-use platform for both
          job seekers and employers.
        </li>
      </ul>
    </div>
  </div>
  <div className="container our-values">
    <div className="row text-center">
      <h2>Our Core Values</h2>
      <div className="col-md-4 mb-4">
        <div className="card p-3 shadow">
          <div className="card-body">
            <i className="fas fa-handshake fa-3x icon" />
            <h5 className="card-title">Integrity</h5>
            <p className="card-text">
              We value honesty and openness in all our actions.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card p-3 shadow">
          <div className="card-body">
            <i className="fas fa-globe fa-3x icon" />
            <h5 className="card-title">Diversity</h5>
            <p className="card-text">
              We celebrate diversity and ensure equal opportunities for
              everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card  p-2 shadow">
          <div className="card-body">
            <i className="fas fa-rocket fa-3x icon" />
            <h5 className="card-title">Innovation</h5>
            <p className="card-text">
              We are always improving our technology to make the hiring process
              better.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
}
  
export default About ;
