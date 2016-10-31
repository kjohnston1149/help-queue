import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSubmission() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description')
      };
      this.sendAction('saveSubmission', params);
    }
  }
});
