import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  toggleFavorited(question) {
    console.log(this.favorites);
    if (this.get('favorites').includes(question)) {
      console.error("Remove!");
      this.get('favorites').removeObject(question);
    } else {
      console.info('Push');
      this.get('favorites').pushObject(question);
    }
  }
});
