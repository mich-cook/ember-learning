import Route from '@ember/routing/route';

export default class PlayersRoute extends Route {
  model() {
    return ['Dan Aykroyd', 'Jane Curtain', 'Chevy Chase'];
  }
}
