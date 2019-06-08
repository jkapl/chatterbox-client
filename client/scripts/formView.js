var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = $('input#message').val();
    console.log(text);

    var message = {
      username: App.username,
      text: text,
      roomname: 'lobby'
    };
    Parse.create(message, MessagesView.render);
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};