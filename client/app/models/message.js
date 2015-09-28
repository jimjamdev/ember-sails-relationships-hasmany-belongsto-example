import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
