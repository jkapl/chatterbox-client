var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    
  },
  
  fetch: function(callback = ()=>{}) {
    Parse.readAll( (data) => {
      // examine the response from the server request:
      var messages = data;
      _.extend(Messages, messages);
      MessagesView.render();
      $('.username').on('click', function () {
        
        Friends.toggleStatus($(this).text());
      })
      RoomsView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
