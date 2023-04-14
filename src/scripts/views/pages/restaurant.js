/* eslint-disable linebreak-style */
import restaurantDB from '../../data/restaurant-db';
import { restaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <picture>
          <source media="(max-width: 600px)" srcset="images/heros/hero-image_2-small.jpg" type="image/jpeg">
          <img src="images/heros/hero-image_2-large.jpg" class="img-style" style="height:100vh;width:100%;border-radius:0" alt="hero-image_2">
        </picture>
        <div class="container" id="skipToContent">
            <div class="row">
                <h1>Restaurant</h1>
            </div>
            <div class="row">
                <div class="col" id="restaurant">
                </div>
            </div>
        </div>
        `;
  },

  async afterRender() {
    const allRestaurant = await restaurantDB.allRestaurant();
    // console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    allRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
