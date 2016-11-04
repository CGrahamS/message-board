import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    postAnswer(params) {
      this.sendAction('postAnswer', params);
    },
    addFavoriteQuestion(question) {
      this.get('favoriteQuestions').addFavoriteQuestion(question);
    }
  }
});
