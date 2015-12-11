//$(document).ready(function() {
	
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
	
	var input = 0;
	var output = ["bork"];
    var doPingPong = function(){};
	$("form#ping-pong-form").submit(function(event){
		var pp_input = $("input#pingpong-input").val();
		
		var list = $('#details');
		for (var i = 0; i < 10; i++) {
			list.append('<li>something</li>');
		}
	});
	
//});
















