	// // GLOBAL VARIABLES

	// var correct = 0;
	// var incorrect = 0;


		
	// QUESTION OBJECTS

	var quiz = {
		questionAnswers: {
			q1 : {
				question: "This is my first Question",
				answers: ["Option x1", "Option 2", "Option 3", "Option 4"],
				correct: "Option __"
			},



			q2 : {
				question: "This is my second Question",
				answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
				correct: "Option __"
			},



			q3 : {
				question: "This is my third Question",
				answers: ["Option 1x", "Option 2", "Option 3", "Option 4"],
				correct: "Option __"
			},


			q4 : {
				question: "This is my fourth Question",
				answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
				correct: "Option __"
			},


			q5 : {
				question: "This is my fifth Question",
				answers: ["Option 1x", "Option 2", "Option 3", "Option 4"],
				correct: "Option __"
			}
		},

			








			renderToHtml: function(){
				// first for loop for populating the panel titles.
				var objectKeys = Object.keys(this.questionAnswers)
				for (var i = 1; i <= objectKeys.length; i++) {
					$("#t"+ i).html('<h3 class="panel-title t' + i + '">' + this["q" + i].question + '</h3>');
					var choices = this[objectKeys[i]].questionAnswers.answers
					for (var i = Things.length; i < 0; i++) {
						//here is where you will build your HTML for choices
					}

}
			},
// // //		
// // create array of objects from object quiz (we cant iterate through an object...
// 				var questions = [this.q1, this.q2, this.q3, this.q4, this.q5];
// // loop through our array of objects 			
// 				for(var k = 0; k <= questions.length; k++){
// // for each element in the questions array, run a function.
// 					questions.forEach(function(element){
// // this console.log returns us the value of each object in our questions array according to its corresponding index.
// 					console.log(element);
// //Javascript runs asynchronously: riuns this function but stops at "var createElements =....",  
// //jumps to populateText function, grabs returned value and continues with rest of function....
// 					var createElements = quiz.populateText(element);
// //appends our section + i with createElements content (answerContainer from populateText function)
// 					$("#section" + k).append(createElements);
// 				});
// 			}
		// },

//
			populateText: function(element){

					for(var i = 0; i < element.answers.length; i++){
						var answerContainer;
						answerContainer += "<div class='radio'><label><input type='radio' name='optradio'>" + element.answers[i] + "</label></div><br>";
						console.log(answerContainer);
					}
					return answerContainer;

			}
	};



	//populate answers:


			// populateAnswersText: function(){
			// 	function populateAnswersText (arr){
			// 		for (var i = 1; i <= 5; i++); {
			// 			newVar = Object.keys(quiz)[i];
			// 				console.log(Object.keys(quiz)[i]);
			// 				console.log(newVar);
			// 	// 			for (var j = 1; j <= 5; j++) {
			// 	// 				$(".panel-body").append('<h3 class="panel-title t' + i + '">' + this["q" + i].question + '</h3>');
			// 	// }
			// 		}
				


			// };


	// function populateAnswersText2 (quiz){
	// 	var placeholderKeys = Object.keys(quiz);

	// 	for (var i = 0; i < placeholderKeys.length; i++){
	// 		var pregunta = quiz[placeholderKeys.question[i]];
	// 		console.log(pregunta);

	// 	}

	// };



			// }


	//previous

			// populateAnswersText: function(){
			// 	for (var i = 1; i <= 5; i++) {
			// 			for (var j = 0; this.q[j] >= 0; j--) {
			// 				$(".x" + i "x" + j).append(this["q" + i].question[j]);
			// 			}

			// 	}
			// }


	//

	//Global

	$(document).ready(function(){
		// quiz.populateText();
		// populateAnswersText();
		// populateAnswersText2(quiz);
		quiz.renderToHtml();
	});





	//click to start game


	// first question appears:
	// 4 answer options appear
	// timer is set to X seconds (counting down)
		//if timer countdown = 0, 



	//clicked answer = input

		// on click: 
			// Track Score 
				// if input === correct answer, then wins++
				// if input !==  correct anser, losses++
			// Reset timer for each question
			// .html push the new question into the Questions <h2>
			// .html push the new answer options into the answer options <li>






