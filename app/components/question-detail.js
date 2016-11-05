import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  // isFavorited: this.get('favoriteQuestions').get('favorites').includes(this.get('question')),
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    postAnswer(params) {
      this.sendAction('postAnswer', params);
    },
    toggleFavorited(question) {
      this.get('favoriteQuestions').toggleFavorited(question);
    }
  }
});
