import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
