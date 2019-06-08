var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleSubmit)
  },

  render: function() {
    
    var roomsList = {};
    Messages.results.forEach(function (message) {
      if(!_.isUndefined(message.roomname)) {
          roomsList[message.roomname] = (message.roomname);
      }
    })
    _.extend(Rooms, roomsList);

    for (var key in Rooms) {
      RoomsView.renderRoom(key);
    }
  },

  renderRoom: function(key) {

    RoomsView.$select.append(`<option value="${key}">${key}</option>`);
    
  },

  handleSubmit: function(event) {
    event.preventDefault();
    MessagesView.$chats.empty();

    var roomSelected = RoomsView.$select.val();
    Messages.results.forEach(function (message) {
      if (roomSelected === message.roomname) {
        MessagesView.renderMessage(message);
      }
    })
  }

};

