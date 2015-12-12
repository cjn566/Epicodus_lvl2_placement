$(document).ready(function() {
  
  // Number replacement logic
  var pingPong = function(number){
    return ( number%15 == 0 ?
      "pingpong" : ( number%5 == 0 ?
      "pong" : ( number%3 == 0 ?
      "ping" : number )));
  };
  
  // Submitting number for ping pong repopulates results list.
  $("form#ping_pong_form").submit(function(event){
    var pp_input = $("input#pingpong_input").val();
    
    // Grab the UL, empty the current contents, and store in local var
    var list = $('#results').empty();
    
    // Populate the UL
    for (var i = 1; i <= pp_input; i++) {
      list.append('<li>' + pingPong(i) + '</li>');
    }
    event.preventDefault();
  });
  
});