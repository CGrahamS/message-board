import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    postQuestion() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        timestamp: moment().format('LLLL')
      };
      this.sendAction('postQuestion', params);
      this.set('author', '');
      this.set('title', '');
      this.set('body', '');
    }
  }
});
