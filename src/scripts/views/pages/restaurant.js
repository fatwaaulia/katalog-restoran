/* eslint-disable linebreak-style */
import restaurantDB from '../../data/restaurant-db';
import { restaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <picture>
          <source media="(max-width: 600px)" srcset="images/heros/hero-image_2.jpg">
          <header class="img-style" style="background-image: url('images/heros/hero-image_2.jpg');height:100vh;" alt="hero-image_2">
          </header>
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
