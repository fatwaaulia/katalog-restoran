import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery/dist/jquery.min.js';

$(document).ready(function() {
    $(".drawer").click(function() {
      $(".items").toggleClass("show");
      $("ul li").toggleClass("hide");
    });
});  
