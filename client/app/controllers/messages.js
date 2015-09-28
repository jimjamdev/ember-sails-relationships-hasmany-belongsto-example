import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function () {

      var user_id = this.get('user_id');
      var store = this.store;

      var message = store.createRecord('message', {
        title: this.get('title'),
        createdAt: new Date(),
        updatedAt: new Date()
      });
      store.findRecord('user', user_id).then(function (user) {
        message.set('user', user);
        message.save();
      });


    },
    delete: function (message) {
      message.destroyRecord();
      return false;
    }
  }
});
