import Controller from 'ember-controller';
import service from 'ember-service/inject';

export default Controller.extend({
  foo: 'never',

  bar: service(),
  store: service(),
});
