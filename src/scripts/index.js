import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery/dist/jquery.min.js';
import restaurant from '../scripts/restaurant.js';

$(document).ready(() => {
    $(".drawer").click(() => {
        $(".items").toggleClass("show");
        $("ul li").toggleClass("hide");
    });
});

restaurant();