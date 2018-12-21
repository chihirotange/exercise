
var question1 = new Question('What is Undertale?', ['a game', 'a program', 'a book', 'a person'], 0);
var question2 = new Question('What is Photoshop?', ['a game', 'a program', 'a book', 'a movie'], 1);
var question3 = new Question('What is The Forest?', ['a game', 'a program', 'a book'], 0);
var question4 = new Question('What is Python Crash Course?', ['a game', 'a program', 'a book'], 2);

var questions = [question1, question2, question3, question4];
var chosenData = questions[Math.floor(Math.random() * questions.length)];
var input;

function Question(question, answers, correctAnswer) {

	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}