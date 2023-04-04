import restaurantDB from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="container">
            <div class="row">
                <h1>Restaurant</h1>
            </div>
            <div class="row" id="restaurant">
            </div>
        </div>
        `;
    },
   
    async afterRender() {
        const restaurant = await restaurantDB.allRestaurant();
        // console.log(restaurant);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurant.forEach((element) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(element);
        });
    },
  };
   
  export default Home;