



var questions = [{
	question: "What is the fictional country that Prince Naveen is from?",
	choices: ["Narnia", "Hogwarts", "Maldonia", "NeverLand"],
	correctAnswer: "Maldonia",
}, {
	question: " What did Princess Jasmin steal from the marketplace?",
	choices: ["Bread", "Apple", "Clover", "Rug"],
	correctAnswer: "Apple",
}, {
	question: "What is the star of The Little Mermaids name?",
	choices: ["Aquata", "Alana", "Adella", "Ariel"],
	correctAnswer: "Ariel",
}, {
	question: "In what year did Cinderella come out?",
	choices: ["1997", "1902", "2015", "1950"],
	correctAnswer: "1950",
}, {
	question: "What is Walt Disney Worlds Mascot?",
	choices: ["Mickey Mouse", "Tinkerbell", "TIana", "Ursula"],
	correctAnswer: "Mickey Mouse",
}, {
	question: "Finish this title. Sleepin ________?",
	choices: ["Biscuit", "Turtle", "Beauty", "Orange"],
	correctAnswer: "Beauty",
}, {
	question: "What is the villians name in Peter Pan?",
	choices: ["Yzma", "Ursula", "Slenderman", "Captain Hook"],
	correctAnswer: "Steve Spurrier",
}, {
	question: "What is the name of Aladdins monkey?",
	choices: ["Abu", "Jafar", "Sultan", "Iago"],
	correctAnswer: "Albert E. Gator",
},


  // $('#start').click(function() {
  //   $("#questions").fadeIn();
  //   $(this).hide();
  // });

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};



   









