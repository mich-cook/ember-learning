import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VideoGameImageComponent extends Component {
  @tracked enlarged = false;

  @action toggleSize() {
    this.enlarged = !this.enlarged;
  }
}
