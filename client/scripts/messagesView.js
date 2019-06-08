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
      if (!_.isUndefined(message.username)) {
        var messageToAppend = MessagesView.renderMessage(message);
        MessagesView.$chats.append(messageToAppend);
      }
    });

  },

  renderMessage: function(message) {
    
    return MessageView.render(message);

  }

};

// App.fetch() - returns all messages in JSON
// Parse.create() - posts message to server