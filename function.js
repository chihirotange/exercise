
var question1 = new Question('What is Undertale?', ['a game', 'a program', 'a book', 'a person'], 0);
var question2 = new Question('What is Photoshop?', ['a game', 'a program', 'a book', 'a movie'], 1);
var question3 = new Question('What is The Forest?', ['a game', 'a program', 'a book', 'a person', 'a dog'], 0);
var question4 = new Question('What is Python Crash Course?', ['a game', 'a program', 'a book'], 2);
var question5 = new Question('What is The Last Caribean?', ['a game', 'a program', 'a book', 'a person', 'a dog'], 4);

var questions = [question1, question2, question3, question4, question5];
var chosenData = questions[Math.floor(Math.random() * questions.length)];

function Question(question, answers, correctAnswer) {

	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

// display question and answers of the chosen data
Question.prototype.displayQuestion = function() {

	console.log(chosenData.question);

	for(var i = 0; i < chosenData.answers.length; i++) {

		console.log(i + ' - ' + chosenData.answers[i]);
	}
}

//check if the user's answer is in correct format
Question.prototype.userInput = function() {

	var input = prompt('Your answer:');

	while(!(input >= 0 && input <= chosenData.answers.length - 1)) {

		input = prompt('Please choose valid answer:');
	}

	return input;
}

// check if the user's answer is the right answer
Question.prototype.rightAnswer = function(answer) {

	if(Number(answer) === chosenData.correctAnswer) {

		console.log('Correct!');
	} else {

		console.log('Incorrect!');
	}
}
chosenData.displayQuestion();
chosenData.rightAnswer(chosenData.userInput());