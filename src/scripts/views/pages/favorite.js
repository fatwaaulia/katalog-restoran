import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { favoriteItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <header class="img-style" style="background-image:linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url('images/heros/hero-image_2.jpg');height:50vh" alt="hero-image_2">
            <div class="container">
                <div class="row center-xy">
                    <h1 style="padding-top:110px;color:white">
                        <span>Fav</span><i class="fa-solid fa-heart" style="color:red;font-size:24px"></i><span>rite</span>
                        Restaurant
                    </h1>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col" id="restaurant">
                </div>
            </div>
        </div>
        `;
    },
   
    async afterRender() {
        const allRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();
        // console.log(restaurant);
        const restaurantContainer = document.querySelector('#restaurant');
        allRestaurant.forEach((restaurant) => {
            restaurantContainer.innerHTML += favoriteItemTemplate(restaurant);
        });
    },
  };
   
  export default Favorite;