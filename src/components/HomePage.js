// HomePage.js
import React from 'react';
import homepageImage from '../homeimg.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-form">
        <div className="home-form-left">
        <h1>
    Power and <span style={{ fontWeight: 'bold', color: '#ffcd33' }}>Success</span> <span style={{ fontWeight: 'bold', color: '#ffcd33' }}>Inspired</span> Life
  </h1>
  <p style={{ marginBottom: '20px' }}>
    Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful. 
    <br/><br/>Thank you for choosing us as your gateway to a secure life.
    <br/><br/>Let's travel together, have a better tomorrow.
  </p>

          <div className="button-group">
            <Link to="/onlinecourses"><button className="homeBtn1">Online Courses</button></Link>
            <Link to="/videos"><button className="homeBtn2">Videos</button></Link>
            
            
          </div>
        </div>

        <div className="home-form-right">
          <img src={homepageImage} alt="Platform" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
