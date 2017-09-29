// hey Chi/Garret, I spent hella time trying to get this to work with very litle success, 
//I started first with objects nested in object, then switched to objects nested 
//in arrays which made iterating easier.. still wasnt able to get my radios to populate 






var quiz = [
{},

				{
					question: "This is my first question",
					options: ["Option 1.1", "Option 2", "Option 3", "Option 4"],
					correct: "Option __"
				},
				{
					question: "This is my second question",
					options: ["Option 2.1", "Option 2", "Option 3", "Option 4"],
					correct: "Option __"
				},
				{
					question: "This is my third question",
					options: ["Option 3.1", "Option 2", "Option 3", "Option 4"],
					correct: "Option __"
				},
				{
					question: "This is my fourth question",
					options: ["Option 4.1", "Option 2", "Option 3", "Option 4"],
					correct: "Option __"
				},
				{
					question: "This is my fifth question",
					options: ["Option 5.1", "Option 2", "Option 3", "Option 4"],
					correct: "Option __"
				},
			]




// TIMER TIMER TIMER 

var timeLeft = 10;

$("#start").on("click", function() {
        //  Set the button alert's timeout to run three seconds after the function's called.
      tenSeconds();

      });



  function tenSeconds() {
var interval = setInterval(function() {
	timeLeft--;
    $("#time-left").html(timeLeft);
    console.log(timeLeft)

    if (timeLeft <= 0)
    {
        alert("time's up!")

        //once i create a results page, delete this clear interval
        clearInterval(interval);

    }
}, 1000);

    // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
    // console log 5 seconds left

  };

// TIMER TIMER TIMER 











function populateText() {

		for(var i = 1; i < quiz.length; i++){
				console.log(i);
				// console.log(quiz.length);
			var headerQuestion = quiz[i].question;
			var h3 = $('<h3>').text(headerQuestion);
			var div = $('<div>');
			div.append(h3);
			$('#t' + i).html(div);

				for (var k = 0; k <= 3; k++) {
					var fillOptions = quiz[i].options[k];
						console.log(fillOptions);
					// var input = $('<input>')

					var label = $('<label>' + "<input ").attr('type', 'radio').attr('name', "optradio").text(fillOptions);
					var div = $('<div>').attr('class', 'radio');
					// label.append(input);
					div.append(label);
					$('#section' + i).append(div);
				}
				 


		}

};

populateText();


	// 				var a = $('<a>').attr('class', '').text('bandsintown');

	// <div 
	// class='radio'>
	// <label>
	// <input type='radio' 
	// name='optradio'>" + element.answers[i] + "</label></div><br>;


	// 				// Things[i]


			// countdown funciton
			// stop countdown function: when timer = 0


