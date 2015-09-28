import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function () {

      var userId = this.get('user_id');
      var store = this.store;

      var message = store.createRecord('message', {
        title: this.get('title')
      });
      store.findRecord('user', userId).then(function (user) {
        message.set('user', user);
        message.save().then(function (result) {
          console.log('Added ' + result);
        }, function (error) {
          console.error('Failed ' + error);

        });
      });


    },
    delete: function (message) {
      message.destroyRecord();
      return false;
    }
  }
});
