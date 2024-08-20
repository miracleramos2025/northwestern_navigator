import React from 'react';
import image1 from '../assets/images/dining_hall.png'; 
import image2 from '../assets/images/meal_exchange.jpeg'; 
import image3 from '../assets/images/dining_dollars.jpeg'; 

const Dinning = () => (
  <div className="dining-page">
    <h2 className="main-title">Northwestern Dining Plan</h2>
    <p className="intro-text">
      All first and second-year students will be assigned to the Open Access meal plan. The Open Access Meal Plan provides unlimited meal swipes at all our campus dining halls. Visit each hall as often as you’d like and join for a quick snack or a full meal during regular operating hours. The plan also includes $125 Dining Dollars per quarter, 5 Meal Exchanges per week, and 3 guest meals per quarter. Commuter students, graduate students, faculty, and staff may purchase meal plans and Cat Cash but are not required to do so.
    </p>

    
    <img src={image1} alt="Dining Hall" className="dining-image" />

    <h2 className="section-title">Dining Halls</h2>
    <div className="dining-grid">
      <div className="dining-item">
        <h3>Allison Dining Commons</h3>
        <p>With special offerings like a kosher station, giant pizza oven, and more, Allison is the place to hang out with friends and relax over a delicious meal.</p>
      </div>
      <div className="dining-item">
        <h3>Elder Dining Commons</h3>
        <p>Street food scene with recognizable stations such as pizza, grill, and comfort. A dedicated Kosher and Pure Eats station completes the inclusive dining experience.</p>
      </div>
      <div className="dining-item">
        <h3>Sargent Dining Commons</h3>
        <p>Sargent Dining Commons offers guests an authentic Farm to Table experience featuring an expanded My Pantry concept and a dining hall providing traditional family-style seating.</p>
      </div>
      <div className="dining-item">
        <h3>Foster Walker Plex East</h3>
        <p>Plex East is unique in only offering Pure Eats, or allergen-free food. While other dining halls have Pure Eats stations, Plex East takes it a step further, only offering food that doesn’t contain the top 8 allergens or gluten.</p>
      </div>
      <div className="dining-item">
        <h3>Foster Walker Plex West</h3>
        <p>Plex West is notable for being the only dining hall that’s open past 8 PM on weekdays, so anyone looking for a late dinner at a dining hall will often head there.</p>
      </div>
      <div className="dining-item hours">
        <h3><a href="https://dineoncampus.com/northwestern/residential-meal-period-hours" target="_blank" rel="noopener noreferrer">Hours of Operation</a></h3>
        <div className="dine-on-campus">
          <h3><a href="https://dineoncampus.com/northwestern/dine-on-campus-app" target="_blank" rel="noopener noreferrer">What's on the Menu?</a></h3>
        </div>
        <div className="dine-on-campus">
          <h3><a href="https://dineoncampus.com/northwestern/ozzi-reusable-container" target="_blank" rel="noopener noreferrer">OZZI Reusable Containers</a></h3>
           </div>
      </div>
    </div>

    
    <img src={image2} alt="Meal Exchange Options" className="dining-image" />

    <h2 className="section-title">Meal Exchange Options</h2>
    <p className="section-text">Students can use their Meal Exchanges at any of the below establishments.</p>
    <h3 className="establishments">Buen Dia | Fran's 847 Late Night Cafe | Lisa's Café | Mod | Shake Smart | Wildcat Deli | 847 Burger</h3>
    <p className="menu-link">Meal Exchange <a href="https://dineoncampus.com/northwestern/meal-exchange-options" target="_blank" rel="noopener noreferrer">Menus</a></p>

    
    <img src={image3} alt="Dining Dollar Locations" className="dining-image" />

    <h2 className="section-title">Dining Dollar Locations</h2>
    <p className="section-text">Students can spend their Dining Dollars at any of the below establishments.</p>
    <h3 className="establishments">Café Bergson | Café Coralie | Chicken & Boba | Kresge Café | Lisa's Market | Market at Norris | Plex Convenience Store | Protein Bar | Starbucks | Tech Express</h3>
    <p className="menu-link">Dining Dollar <a href="https://dineoncampus.com/northwestern/dining-locations-interactive-map" target="_blank" rel="noopener noreferrer">Locations</a></p>
  </div>
);

export default Dinning;
