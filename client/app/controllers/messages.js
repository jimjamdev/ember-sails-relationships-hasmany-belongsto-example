import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addMessage: function() {

      var newMessage = this.store.createRecord('message', {
        title: this.get('title'),
        user: [1]
      });
      newMessage.save().then(function() {
      }, function(error) {
        console.warn('Save Failed.', error);
      });
    },
    deleteMessage: function(message) {
      message.destroyRecord(); return false; }
  }
});
