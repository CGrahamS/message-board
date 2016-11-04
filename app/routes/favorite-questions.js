import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),
  model() {
    return this.get('favoriteQuestions.favorites');
  }
});
