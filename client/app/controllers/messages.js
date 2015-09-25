import Ember from 'ember';

export default Ember.Controller.extend({

  model: function () {
    return this.store.createRecord('message');
  },

  actions: {
    addMessage: function() {
      var self = this;
      var user = this.get('user');
      var newMessage = this.store.createRecord('message', {
        title: this.get('title'),
      });

      newMessage.set('user', user);

      return newMessage.save().then(function(id) {
        console.log("Message added" + id + "with user" + user);

      }, function(error) {
        console.warn('Save Failed.', error);
      });
    },
    deleteMessage: function(message) {
      message.destroyRecord(); return false; }
  }
});
