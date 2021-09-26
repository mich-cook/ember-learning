import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | video-game/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {

    // can't use these in hbs 5 years after it was reported
    // https://github.com/ember-cli/babel-plugin-htmlbars-inline-precompile/issues/9
    const src = "/assets/images/Centipede-arcade-flyer.jpg";
    const alt = "Centipede Arcade Flyer";

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
});
