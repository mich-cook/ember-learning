import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember quickstart', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Application Template Header');
    assert.dom('a').hasText('About');
    await click('a');

    assert.equal(currentURL(), '/about');
  });
  test('TODO: visiting /about', async function (assert) {
    assert.equal(1, 1);
  });
  test('TODO: visiting /contact-us', async function (assert) {
    assert.equal(1, 1);
  });
});
