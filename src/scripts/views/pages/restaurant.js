import restaurantDB from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <header class="jumbotron" alt="hero-image_2">
        </header>
        <div class="container">
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
        const restaurant = await restaurantDB.allRestaurant();
        // console.log(restaurant);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurant.forEach((element) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(element);
        });
    },
  };
   
  export default Home;