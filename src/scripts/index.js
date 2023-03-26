import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import $ from 'jquery/dist/jquery.min.js';

$('.navTrigger').click(() => {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(() => {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
