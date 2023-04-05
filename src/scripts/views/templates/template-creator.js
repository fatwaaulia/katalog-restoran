import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="card-body">
        <p style="display:flex;justify-content:space-between;">
            <b>Rating ${restaurant.rating}</b>
            <b>${restaurant.city}</b>
        </p>
        <h3>${restaurant.name}</h3>
        <p class="deskripsi">${restaurant.description}</p>
        <a href="#/detail/${restaurant.id}" class="detail">
            Detail
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</div>
`;

const RestaurantDetailTemplate = (restaurant, foodMenu, drinkMenu, customerReviews) =>
`
<div class="row">
    <div class="col-lg-4">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" style="width:100%;margin-top:8px">
        <div>
            <h1 style="margin-top:0">${restaurant.name}</h1>
            <p>${restaurant.address} <b>(${restaurant.city})</b></p>
            <p>${restaurant.description}</p>
        </div>
    </div>
</div>
<div class="row">
    <h1 style="margin-top:0">Menu</h1>
</div>
<div class="row">
    <div class="col">
        <div>
            <p><b>=Foods=</b></p>
            <p>${foodMenu}</p>
        </div>
        <div>
            <p><b>=Drinks=</b></p>
            <p>${drinkMenu}</p>
        </div>
    </div>
</div>
<div class="row">
    <h1 style="margin-top:0">Feedback</h1>
</div>
<div class="row">
    <div class="col">
        <div>
            <p>${customerReviews}</p>
        </div>
    </div>
</div>
`;
 
export { createRestaurantItemTemplate, RestaurantDetailTemplate };