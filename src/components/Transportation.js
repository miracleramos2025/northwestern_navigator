import React from 'react';
import image1 from '../assets/images/cta201.jpg';
import image2 from '../assets/images/intercampus.jpeg';
import image3 from '../assets/images/bikes.jpeg';
import image4 from '../assets/images/safe_ride.jpeg';
import image5 from '../assets/images/evanston_loop.jpeg';
import image6 from '../assets/images/zipcar.jpeg';


const Transportation = () => (
  <div className="transportation-page">
    <h2 className="transportation-title">Transportation Around Northwestern</h2>

    <div className="media-section">
      <div className="media-item">
        <img src={image1} alt="CTA 201 Bus" style={{ width: '550px', height: 'auto' }} className="media-image left-align" />
        <div className="media-text">
          <h3>CTA 201</h3>
          <p>
            Using your Northwestern provided Ventra card, enjoy free trips on the CTA 201! It provides convenient transportation between the Howard Red Line station and the Northwestern University campus, making stops along Sheridan Road and other key locations.
          </p>
          <p>Learn More <a href="https://www.northwestern.edu/transportation-parking/shuttles/routes/cta-201.html">Here</a></p>
        </div>
      </div>

      <div className="media-item">
        <img src={image2} alt="Northwestern Intercampus Shuttle"  style={{ width: '600px', height: 'auto' }} className="media-image right-align" />
        
        <div className="media-text">
          <h3>Northwestern's Intercampus Shuttle</h3>
          <p>
            Show your Wildcard and enjoy free trips between the Evanston and Chicago campuses! It operates on weekdays, making it easy for students, faculty, and staff to travel between the two campuses for classes, meetings, and other university activities.
          </p>
          <p>Learn More <a href="https://www.northwestern.edu/transportation-parking/shuttles/routes/intercampus.html" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>

      <div className="media-item">
        <img src={image3} alt="Lyft Divvy Bikes" style={{ width: '600px', height: 'auto' }} className="media-image left-align" />
        <div className="media-text">
          <h3>Lyft Divvy Bikes (Divvy for Everyone)</h3>
          <p>
            The Chicago Department of Transportation (CDOT) and City of Evanston aim to offer all residents an affordable, accessible, and fun transportation option. D4E provides a $5 Annual Membership to qualifying residents. The program also incorporates a cash payment system for those who do not have a debit, credit card, or prepaid card required for a standard Divvy membership.
          </p>
          <p>Learn More <a href="https://divvybikes.com/pricing/d4e" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
    </div>

    <div className="media-section">
      <div className="media-item">
        <img src={image4} alt="Northwestern Safe Ride" style={{ width: '600px', height: 'auto' }} className="media-image right-align" />
        <div className="media-text">
          <h3>Safe Ride</h3>
          <p>
            Safe Ride is a free transportation service offered by Northwestern University to provide students, faculty, and staff with a safe and convenient way to travel around the Evanston campus and surrounding areas during evening and late-night hours. Available daily during the academic year, Safe Ride offers door-to-door service, ensuring a secure way to get home or to campus after dark.
          </p>
          <p>Learn More <a href="https://www.northwestern.edu/nuhelp/safety-and-security/safe-ride/" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>

      <div className="media-item">
        <img src={image5} alt="Northwestern Evanston Loop" style={{ width: '600px', height: 'auto' }} className="media-image left-align" />
        <div className="media-text">
          <h3>Northwestern Evanston Loop</h3>
          <p>
            The Northwestern Evanston Loop is a free shuttle service provided by Northwestern University, operating during evening and late-night hours. It circulates around key locations on the Evanston campus and nearby areas, offering students, faculty, and staff a convenient way to travel safely after dark. The loop runs on a continuous route, making it easy to access popular destinations without needing a car.
          </p>
          <p>Learn More <a href="https://www.northwestern.edu/transportation-parking/shuttles/routes/schedules/loop-sunday-wednesday.html" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>

      <div className="media-item">
        <img src={image6} alt="Zipcar" style={{ width: '600px', height: 'auto' }} className="media-image right-align" />
        <div className="media-text">
          <h3>Zipcar</h3>
          <p>
            The Wildcard Advantage Program at Northwestern University offers students, faculty, and staff exclusive discounts and benefits through partnerships with various businesses, including Zipcar. With a Northwestern Wildcard, members can join Zipcar at a reduced rate, giving them access to a fleet of cars conveniently located on or near campus. This makes it easy and affordable to rent a car for short trips, errands, or exploring the area, all while avoiding the costs and hassles of car ownership.
          </p>
          <p>Learn More <a href="https://www.northwestern.edu/procurement/purchasing/wildcard-advantage-program/businesses/zipcar.html" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Transportation;
