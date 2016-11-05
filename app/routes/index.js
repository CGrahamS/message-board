import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      favorites: this.get('favoriteQuestions')
    });
  },
  setupController(controller, models) {
    controller.set('questions', models.questions);
    controller.set('favorites', models.favorites);
  },

  actions: {
    postQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
