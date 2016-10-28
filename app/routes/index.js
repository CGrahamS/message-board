import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    });
  },
  setupController(controller, models) {
    controller.set('questions', models.questions);
  }
});
