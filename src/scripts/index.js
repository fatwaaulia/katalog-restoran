import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery/dist/jquery.min.js';

$(document).ready(function() {
    $(".drawer").click(function() {
        $(".items").toggleClass("show");
        $("ul li").toggleClass("hide");
    });
});

// Data Main
const elementRestaurant = document.getElementById('elementRestaurant');
elementRestaurant.innerHTML = '';
const obj = restaurants.restaurants;
obj.forEach(element => {
    elementRestaurant.innerHTML += `
    <div class="card">
        <img src="${element.pictureId}" alt="${element.name}">
        <div class="card-body">
            <p style="display:flex;justify-content: space-between;">
                <b>Rating ${element.rating}</b>
                <b>${element.city}</b>
            </p>
            <h3>${element.name}</h3>
            <p class="deskripsi">${element.description}</p>
        </div>
    </div>
    `;
});
