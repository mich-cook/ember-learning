import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Centipede',
      publisher: 'Atari',
      flyerImage: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Centipede-arcade-flyer.jpg',
      flyerDesc: 'Arcade Flyer',
      releaseDate: 'June 1981',
      platform: 'Atari 2600',
      multiplayer: true,
      genre: 'Shooter',
    }
  }
}

