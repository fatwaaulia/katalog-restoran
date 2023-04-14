/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import restaurantDB from '../../data/restaurant-db';
import { RestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <picture>
          <source media="(max-width: 600px)" srcset="images/heros/hero-image_2-small.jpg" type="image/jpeg">
          <header>
            <img src="images/heros/hero-image_2-large.jpg" class="img-style" style="height:50vh;width:100%;border-radius:0;" alt="hero-image_2">
            <div class="row center-xy">
              <h1 style="color:red;-webkit-text-stroke: 1px white;margin-top:-350px">Detail Restaurant</h1>
          </div>
          </header>
        </picture>
        <div class="container" id="skipToContent">
            <div id="restaurant">
            </div>
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await restaurantDB.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const foodMenu = [];
    data.restaurant.menus.foods.forEach((food, key) => {
      foodMenu.push(`<span>${key + 1}. ${food.name}<span><br>`);
    });
    const drinkMenu = [];
    data.restaurant.menus.drinks.forEach((drink, key) => {
      drinkMenu.push(`<span>${key + 1}. ${drink.name}<span><br>`);
    });
    const customerReviews = [];
    data.restaurant.customerReviews.forEach((customerReview) => {
      customerReviews.push(`  
                                <div">
                                    <p>
                                        <span><b>${customerReview.name}</b><span> <br>
                                        <span>${customerReview.date}<span> <br>
                                        <span>${customerReview.review}<span> 
                                    </p>
                                <div>
                                `);
    });
    // console.log(customerReviews.join(''));
    restaurantContainer.innerHTML = RestaurantDetailTemplate(data.restaurant, foodMenu.join(''), drinkMenu.join(''), customerReviews.join(''));

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        pictureId: data.restaurant.pictureId,
        city: data.restaurant.city,
        rating: data.restaurant.rating,
      },
    });
  },
};

export default Detail;
