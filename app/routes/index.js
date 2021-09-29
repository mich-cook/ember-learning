import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/games.json');
    const { data } = await response.json();
    return data.map((model) => {
      const { attributes } = model;
      return { ...attributes };
    });
  }
}
