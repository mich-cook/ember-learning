import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | video-game/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    // can't use these in hbs 5 years after it was reported
    // https://github.com/ember-cli/babel-plugin-htmlbars-inline-precompile/issues/9
    const src = '/assets/images/Centipede-arcade-flyer.jpg';
    const alt = 'Centipede Arcade Flyer';

    await render(hbs`
      <VideoGame::Image
        src = "/assets/images/Centipede-arcade-flyer.jpg"
        alt = "Centipede Arcade Flyer"
      />
    `);

    assert
      .dom('img')
      .exists()
      .hasAttribute('src', src)
      .hasAttribute('alt', alt);
  });

  test('it toggles size when button is clicked', async function (assert) {
    await render(hbs`
      <VideoGame::Image
        src = "/assets/images/Centipede-arcade-flyer.jpg"
        alt = "Centipede Arcade Flyer"
      />
    `);

    // initial state
    assert.dom('div.image').exists();
    assert.dom('div.image').doesNotHaveClass('large');
    assert.dom('button').hasText('View Larger');

    await click('button');

    // toggled to large image view
    assert.dom('div.image').hasClass('large');
    assert.dom('button').hasText('View Smaller');

    await click('button');

    // toggled back to initial state
    assert.dom('div.image').doesNotHaveClass('large');
    assert.dom('button').hasText('View Larger');
  });
});
