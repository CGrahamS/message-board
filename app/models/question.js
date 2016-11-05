import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  favoriteQuestions: Ember.inject.service(),
  author: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('string'),
  answers: DS.hasMany('answers', {async: true})
});
