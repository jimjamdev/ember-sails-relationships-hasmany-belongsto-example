import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'messages',
  model: function() {
    return this.store.findAll('message', {sort: 'createdAt asc'});
  },
  /*setupController: function(controller, model){
    controller.set('model', model);
    controller.set('users', this.store.find('user'));
  }*/
});
