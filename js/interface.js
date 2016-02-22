$(document).ready(function() {

  var takeaway = new Takeaway();

  $.ajax({
    type: “POST”,
    url: “https:'//'mandrillapp.com/api/1.0/messages/send.json”,
    data: {
      ‘key’: ‘RE3jX8PyZBIpMoyNjHTgqw’,
      ‘message’: {
        ‘from_email’: ‘campbell.hf@gmail.com’,
        ‘to’: [
            {
              ‘email’: ‘campbell.hf@gmail.com’,
              ‘name’: ‘Heather’,
              ‘type’: ‘to’
            },
          ],
        ‘autotext’: ‘true’,
        ‘subject’: ‘Your takeaway order is on the way!’,
        ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });

   $('#yourButtonId').click(function() {
    $.ajax({
      // ...
    });
  });

});
