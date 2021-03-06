import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo');

  this.route('button', function() {
    this.route('show', { path: ':button_id' }, function() {
      this.route('content', { path: ':content_id' });
    });
  });
});

export default Router;
