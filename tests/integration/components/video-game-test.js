import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | video-game', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a game', async function (assert) {
    await render(hbs`<VideoGame />`);

    assert.dom('article').exists();
    assert.dom('article h3').hasText('Centipede');
    assert.dom('article .detail.publisher').includesText('Atari');
    assert.dom('article .detail.release').includesText('1981');
    assert.dom('article .detail.platform').includesText('Atari 2600');
    assert.dom('article .detail.multiplayer').includesText('Yes');
    assert.dom('article .detail.genre').includesText('Shoot');
    assert.dom('article img').exists();
  });
});
