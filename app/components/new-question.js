import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newQuestionHidden: true,
  actions: {
    postQuestion() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        timestamp: moment().format('LLLL')
      };
      if (params.author === '' || params.title === undefined || params.body === undefined) {
        alert("It looks like you still have an empty field in your question form!");
      } else {
        this.set('newQuestionHidden', true);
        this.sendAction('postQuestion', params);
        this.set('author', '');
        this.set('title', '');
        this.set('body', '');
      }
    },
    showNewQuestion() {
      this.set('newQuestionHidden', false);
    },
    cancelQuestion() {
      this.set('newQuestionHidden', true);
    }
  }
});
