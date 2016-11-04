import Ember from 'ember';

export function favorited(params) {
  var question = params[0]._internalModel._data;
  var favorites = params[1];
  console.log(params[0]);
  console.log(params[1]);
}

export default Ember.Helper.helper(favorited);
