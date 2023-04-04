import API_ENDPOINT from '../globals/api-endpoint';
 
class RestaurantDB {
  static async allRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
 
  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default RestaurantDB;