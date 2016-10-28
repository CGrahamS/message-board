import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newAnswerHidden: true,
  actions: {
    postAnswer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        timestamp: moment().format('LLLL'),
        question: this.get('question')
      };
      if(params.author === '' || params.body === undefined) {
        alert("It looks like you still have an empty field in your answer form!");
      } else {
        this.set('newAnswerHidden', true);
        this.sendAction('postAnswer', params);
        this.set('author', '');
        this.set('body', '');
      }
    },
    showNewAnswer() {
      this.set('newAnswerHidden', false);
      this.set('author', '');
      this.set('body', '');
    },
    cancelAnswer() {
      this.set('newAnswerHidden', true);
    }
  }
});
