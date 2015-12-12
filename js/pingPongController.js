$(document).ready(function() {
	
	// Number replacement logic
	var ping_pong = function(number){
		if(number%15==0){
			return "pingpong";
		}
		else if(number%5==0){
			return "pong";
		}
		else if(number%3==0){
			return "ping";
		}
		else return number;
	}
	
	// Submitting number for ping pong repopulates results list.
	$("form#ping-pong-form").submit(function(event){
		var pp_input = $("input#pingpong-input").val();
		
		// Grab the UL, empty the current contents, and store in local var
		var list = $('#results').empty();
		
		// Populate the UL
		for (var i = 1; i <= pp_input; i++) {
			list.append('<li>' + ping_pong(i) + '</li>');
		}
		
		event.preventDefault();
	});	
});















