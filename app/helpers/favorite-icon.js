import Ember from 'ember';

export function favoriteIcon(params) {
  var question = params[0];
  var favorites = params[1];
  if (favorites.get('favorites').includes(question)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>');
  }
}

export default Ember.Helper.helper(favoriteIcon);
