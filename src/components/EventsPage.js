import React from 'react';
import event1 from '../assets/images/event_1.webp';
import event2 from '../assets/images/event_2.jpeg';

const EventsPage = () => (
  <div>
    <h2>Christmas in Chicago</h2>
    <div className="events-image">
      <img src={event1} alt="Christkindlmarket at Daley Plaza" />
    </div>
    <h2>Christkindlmarket</h2>
    <h3>Christkindlmarket is a Christmas market held annually at Daley Plaza in Chicago, Illinois, United States. The festival attracts more than 1 million visitors each year.</h3>
    <div className="events-image">
      <img src={event2} alt="Maggie Daley Park Ice Skating Ribbon" />
    </div>
    <h2>Maggie Daley Park Ice Skating Ribbon</h2>
    <h3>Maggie Daley Park Ice Skating Ribbon is a seasonal public ice skating surface in the Maggie Daley Park section of Grant Park in the Loop community area of Chicago, which is bounded by Columbus Drive, Randolph Street, Monroe Street and Lake Shore Drive.</h3>
  </div>
);

export default EventsPage;
