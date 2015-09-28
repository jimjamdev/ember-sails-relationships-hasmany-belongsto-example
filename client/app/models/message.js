import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
