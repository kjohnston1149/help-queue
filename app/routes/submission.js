import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  saveSubmission(params) {
    var newSubmission = this.store.createRecord('submission', params);
    newSubmission.save();
    this.transitionTo('otw');
  }
  }
});
