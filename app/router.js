import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question2');
  this.route('question3');
  this.route('submission');
  this.route('otw');
  this.route('teacher');
  this.route('submission-display', {path: '/submission-display/:submission_id'});
});

export default Router;
