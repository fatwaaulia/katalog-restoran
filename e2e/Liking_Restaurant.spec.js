/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
});