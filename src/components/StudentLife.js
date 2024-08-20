import React from 'react';
import image1 from '../assets/images/athletics.jpeg';
import image2 from '../assets/images/org_fair.jpeg'; 
import image3 from '../assets/images/area_events.JPG'; 

const StudentLife = () => (
  <div className="student-life-page">
    
    <h2 className="main-title">Student Life at Northwestern University</h2>
    <p className="intro-text">Welcome to Northwestern University! Explore the vibrant student life on campus through various athletic events, student organization fairs, and area events. Dive into what makes the Northwestern community unique and exciting!</p>

    <div className="student-life-section">
     
      <h2 className="section-title">Athletic Events with Student Giveaways</h2>
      <img src={image1} alt="Athletic Event" className="student-life-image" />
      <p>Northwestern Wildcats pride themselves on a strong athletic tradition. As a student, you can attend various athletic events where you'll have the chance to receive exclusive giveaways like t-shirts, hats, and more! Make sure to wear your purple and support the Wildcats!</p>
    </div>
    

    <div className="student-life-section">
      <h2 className="section-title">Student Organization Fair</h2>
      <img src={image2} alt="Student Organization Fair" className="student-life-image" />
      <p>Discover your passion and get involved! The Student Organization Fair is your chance to explore over 500 student-run clubs and organizations. Whether you're into academic groups, cultural organizations, performing arts, or community service, there's something for everyone. Meet student leaders, sign up for clubs, and find your place within the Northwestern community!</p>
      <p>September 25th, 12pm - 5pm at Norris University Center</p>
    </div>

    <div className="student-life-section">
      <h2 className="section-title">Area Events</h2>
      <img src={image3} alt="Area Events" className="student-life-image" />
      <p>Northwestern University is surrounded by several vibrant areas, each offering unique events and experiences. Explore what each area has to offer:</p>
      <div className="area-list">
        <h3><a href="https://sites.northwestern.edu/northarea/" target="_blank" rel="noopener noreferrer">North Area</a></h3>
        <h3><a href="https://sites.northwestern.edu/northeastarea/" target="_blank" rel="noopener noreferrer">Northeast Area</a></h3>
        <h3><a href="https://sites.northwestern.edu/southarea/" target="_blank" rel="noopener noreferrer">South Area</a></h3>
        <h3><a href="https://sites.northwestern.edu/southwestarea/" target="_blank" rel="noopener noreferrer">Southwest Area</a></h3>
      </div>
    </div>
  </div>
);

export default StudentLife;
