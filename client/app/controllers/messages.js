import Ember from 'ember';

export default Ember.Controller.extend({

  model: function () {
    return this.store.createRecord('message');
  },

  actions: {
    addMessage: function() {
      var self = this;
      var newMessage = this.store.createRecord('message');
      var user = this.get('user');

      newMessage.set('user', user);

      return newMessage.save().then(function() {
      }, function(error) {
        console.warn('Save Failed.', error);
      });
    },
    deleteMessage: function(message) {
      message.destroyRecord(); return false; }
  }
});
