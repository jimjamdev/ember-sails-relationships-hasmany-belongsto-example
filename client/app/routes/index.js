import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'messages',
  model: function() {
    var store = this.store;
    return store.findAll('message');
  },
  afterModel: function(model){
    return Ember.RSVP.all(model.getEach('user'));
  }
});
