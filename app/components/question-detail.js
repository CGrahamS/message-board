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
    toggleFavorited(question) {
      this.get('favoriteQuestions').toggleFavorited(question);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
