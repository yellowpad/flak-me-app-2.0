$(document).on('turbolinks:load', function() {
  submitNewMessage();
});

function submitNewMessage(){
  $('textarea#message_body').keydown(function(event) {
    if (event.keyCode == 13) {
        $('input[type=submit]').click();
        $('#message_body').val(" ")
        return false;
     }
  });
}
