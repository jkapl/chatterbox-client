var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.render();
  },

  render: function() {
    // Messages.forEach(renderMessage(message));
    //MessagesView.renderMessage(/*100 messages*/);
    // debugger;
    
    Messages.results.forEach(function(message) {
      if (!_.isUndefined(message.username) && !_.isUndefined(message.text) && !_.isUndefined(message.roomname)) {
        MessagesView.renderMessage(message);
      }
    });

  },

  renderMessage: function(message) {
    
    var msg = MessageView.render(message);
    MessagesView.$chats.append(msg);

  }

};

// App.fetch() - returns all messages in JSON
// Parse.create() - posts message to server