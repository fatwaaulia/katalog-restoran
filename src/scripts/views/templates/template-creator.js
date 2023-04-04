import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (element) => `
<div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + element.pictureId}" alt="${element.name}">
    <div class="card-body">
        <p style="display:flex;justify-content:space-between;">
            <b>Rating ${element.rating}</b>
            <b>${element.city}</b>
        </p>
        <h3>${element.name}</h3>
        <p class="deskripsi">${element.description}</p>
        <a href="#" class="detail">
            Detail
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</div>
`;
 
export { createRestaurantItemTemplate };