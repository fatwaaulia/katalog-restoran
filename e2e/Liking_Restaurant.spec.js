/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.dontSeeElement('.card');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card');
  I.amOnPage('/');
  I.waitForElement('.card');
  I.seeElement('.card-body a');

  const firstRestaurant = locate('.card-body a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-body a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
