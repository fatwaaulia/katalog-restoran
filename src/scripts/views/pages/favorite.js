/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { favoriteItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <picture>
        <source media="(max-width: 600px)" srcset="images/heros/hero-image_2-small.jpg" type="image/jpeg">
        <header>
          <img src="images/heros/hero-image_2-large.jpg" class="img-style" style="height:50vh;width:100%;border-radius:0;" alt="hero-image_2">
          <div class="row center-xy">
            <h1 style="color:red;-webkit-text-stroke: 1px white;margin-top:-350px">Favorite Restaurant</h1>
        </div>
        </header>
      </picture>
      <div class="container" id="skipToContent">
          <div class="row">
              <div class="col" id="restaurant">
              </div>
          </div>
      </div>
    `;
  },

  async afterRender() {
    const allRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    if (allRestaurant.length > 0) {
      restaurantContainer.innerHTML = '';
    } else {
      restaurantContainer.innerHTML = 'Restaurant tidak ditemukan!';
    }
    allRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += favoriteItemTemplate(restaurant);
    });
  },
};

export default Favorite;
