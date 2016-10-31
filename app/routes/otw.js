import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(submission) {
      if (confirm("Are you sure you want to delete this queue for help?")) {
        this.sendAction('destroySubmission', submission);
      }
    },
    // destroySubmission(submission) {
    //   this.destroyRecord();
    //   this.transitionTo('index');
    // }
  }
});
