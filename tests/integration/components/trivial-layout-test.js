import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trivial-layout', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders content that was {{yield}}ed', async function (assert) {
    await render(hbs`<TrivialLayout>Hello World</TrivialLayout>`);

    assert.dom('.wrapper').exists();
    assert.dom('.wrapper header').exists();
    assert.dom('.wrapper .left-nav').exists();
    assert.dom('.wrapper .content').exists();
    assert.dom('.wrapper .content').hasText('Hello World');
  });
});
