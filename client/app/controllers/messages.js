import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addMessage: function() {

      let user = this.store.findRecord('user', 1);

      let message = this.store.createRecord('message', {
        title: this.get('title'),
        user: user
      });
      //user.get('messages').pushObject(message);
      message.save();

     /* return message.save().then(function(result) {
        console.log("Message added" + result);

      }, function(error) {
        console.warn('Save Failed.', error);
      });*/
    },
    deleteMessage: function(message) {
      message.destroyRecord(); return false; }
  }
});
