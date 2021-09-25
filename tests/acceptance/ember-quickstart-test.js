import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember quickstart', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Application Template Header');
    assert.dom('.content a').hasText('About');
    await click('.content a');

    assert.equal(currentURL(), '/about');
  });
  test('TODO: visiting /about', async function (assert) {
    assert.equal(1, 1);
  });
  test('TODO: visiting /contact-us', async function (assert) {
    assert.equal(1, 1);
  });

  test('NavBar navigation', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav .menu-index').hasText('Home');
    assert.dom('nav .menu-about').hasText('About');
    assert.dom('nav .menu-contact').hasText('Contact');

    await click('nav .menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav .menu-contact');
    assert.equal(currentURL(), '/contact-us');

    await click('nav .menu-index');
    assert.equal(currentURL(), '/');
  });
});
