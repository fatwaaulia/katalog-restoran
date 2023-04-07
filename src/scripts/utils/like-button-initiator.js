import FavoriterestaurantIdb from '../data/favorite-restaurant-idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/template-creator';
 
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
 
    await this._renderButton();
  },
 
  async _renderButton() {
    const { id } = this._restaurant;
 
    if (await this._isrestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
 
  async _isrestaurantExist(id) {
    const restaurant = await FavoriterestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },
 
  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriterestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
 
  _renderLiked() {
    this._likeButtonContainer.innerHTML = likedButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriterestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
 
export default LikeButtonInitiator;