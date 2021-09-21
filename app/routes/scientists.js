import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Robert Goddard', 'John Atanasoff', 'Alan Bradley'];
  }
};
