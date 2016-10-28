import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    postAnswer(params) {
      alert("q-r-postanswer");
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('questions').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
