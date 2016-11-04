import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function() {
    if (this.get('question.answers.length') > 0) {
      return Ember.String.htmlSafe('Answers: ' + this.get('question.answers.length'));
    } else {
      return Ember.String.htmlSafe('<h5>No answers yet!</h5>');
    }
  })
});
