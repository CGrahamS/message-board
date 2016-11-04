import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  addFavoriteQuestion(question) {
    if (this.get('favorites').includes(question)) {
      alert("You've already favorited this question!");
    } else {
      this.get('favorites').pushObject(question);
    }
  }
});
