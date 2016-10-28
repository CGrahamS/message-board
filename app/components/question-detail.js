import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    postAnswer(params) {
      this.sendAction('postAnswer', params);
    }
  }
});
