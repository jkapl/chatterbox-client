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
      console.log(message);
      if (!_.isUndefined(message.username)) {
        console.log(message)
        var messageToAppend = MessagesView.renderMessage(message);
        console.log(messageToAppend);
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