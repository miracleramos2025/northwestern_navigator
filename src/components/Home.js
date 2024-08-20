import React from 'react';
import Carousel from './Carousel';

const Home = ({ carouselEnabled }) => (
  <div className="home-page">
    <h2 className="home-title">Welcome Northwestern Wildcats!</h2>

    <Carousel carouselEnabled={carouselEnabled} />

    <div className="home-intro">
      <p>
        Welcome to your go-to resource for everything Northwestern! Navigating campus life has never been easier with our comprehensive guide designed specifically for students. Discover the best dining options to satisfy any craving, find the most convenient transportation routes to get you where you need to go, and uncover the perfect study spaces tailored to your needs. Plus, dive into a world of fun activities that will help you make the most of your time at Northwestern. Whether you're new to campus or looking to explore more, we've got all the information you need to thrive and enjoy your student experience to the fullest.
      </p>
    </div>
  </div>
);

export default Home;
