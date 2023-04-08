import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery/dist/jquery.min.js';
import App from './views/app';
import swRegister from './utils/sw-register';

$(document).ready(() => {
    $(".drawer").click(() => {
        $(".items").toggleClass("show");
        $("ul li").toggleClass("hide");
    });
});

const app = new App({
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});