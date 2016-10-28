import Ember from 'ember';

export default Ember.Component.extend({
  updateHidden: true,
  actions: {
    showUpdate() {
      this.set('updateHidden', false);
    },
    cancelUpdate() {
      this.set('updateHidden', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('updateHidden', true);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
