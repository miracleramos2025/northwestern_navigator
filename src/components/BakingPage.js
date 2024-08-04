import React from 'react';
import baking1 from '../assets/images/baking_1.png';
import baking2 from '../assets/images/baking_2.jpg';

const BakingPage = () => (
  <div>
    <h2>Holiday Baking</h2>
    <div className="dessert left-align">
      <img src={baking1} alt="Strawberry Santa Hats" />
      <div className="dessert-text">
        <h3>Strawberry Santa Hats</h3>
        <p>Make the easiest and most FUN Strawberry Santas as a festive and healthy holiday snack to share with the whole family. You only need 3 ingredients and 5 minutes to make these little Santa hats!</p>
        <p>Click <a href="https://emeals.com/recipes/recipe-47511-306654-Strawberry-Santa-Hats" target="_blank" rel="noopener noreferrer">here</a> for the recipe</p>
      </div>
    </div>
    <div className="dessert right-align">
      <div className="dessert-text">
        <h3>Vegan Christmas Rocky Road Brownies (Gluten-Free)</h3>
        <p>These Vegan Christmas Rocky Road are the ultimate festive no-bake recipe. They combine all the best Christmas flavours with classic rocky road goodness. They are naturally vegan, gluten-free and so easy to make.</p>
        <p>Click <a href="https://nourishingamy.com/2021/12/01/vegan-christmas-rocky-road-gluten-free/" target="_blank" rel="noopener noreferrer">here</a> for the recipe</p>
      </div>
      <img src={baking2} alt="Vegan Christmas Rocky Road Brownies" />
    </div>
  </div>
);

export default BakingPage;
