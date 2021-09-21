import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PersonListComponent extends Component {
  @action
  showPerson(person) {
    console.log(`Saw a click on ${person}`);
  }
}
