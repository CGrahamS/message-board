import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    postAnswer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        timestamp: moment().format('LLLL')
      };
      if(params.author === '' || params.body === undefined) {
        alert("It looks like you still have an empty field in your answer form!");
      } else {
        this.sendAction('postAnswer', params);
        this.set('author', '');
        this.set('body', '');
      }
    }
  }
});
