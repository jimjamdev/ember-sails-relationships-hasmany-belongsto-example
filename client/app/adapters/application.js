import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/1',
  host: 'http://localhost:1337'
});
