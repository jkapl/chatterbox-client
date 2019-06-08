var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    var roomsList = {};
    Messages.results.forEach(function (message) {
      if(!_.isUndefined(message.roomname)) {
          roomsList[message.roomname] = (message.roomname);
      }
    })
    console.log(roomsList)
    _.extend(Rooms, roomsList);
    for (var key in roomsList) {
      // RoomsView.$select.append(`<div>what</div>`)
      RoomsView.$select.append(`<option value="${key}">${key}</option>`);
    }
  },

  renderRoom: function() {
    return RoomsView.render();
    
  }

};

