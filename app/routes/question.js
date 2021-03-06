import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer'),
      favorites: this.get('favoriteQuestions')
    });
  },
  actions: {
    postAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question_id);
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transistionTo('question', params.question_id);
    },
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
