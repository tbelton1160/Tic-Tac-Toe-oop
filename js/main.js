//I need to create some form of constructor function that can make a class for player one and player two
//The the constructor needs to have a query selector so each player can select a box
//I need to create a function to check for wins, it needs if/else statements for winning conditions
//the function needs a way to pull the value from each box in order to check for wins
//each player needs a method that can differentiate whos turn it is, after the method is called it should change it to the other players turnn

class TicTacToe{
	constructor(targetBox){//targetbox is the paramater that we need for each child object and differentiates all of them
		this.targetBox = targetBox//the box that was clicked on the tic tac toe board
		document.getElementById(this.targetBox).addEventListener('click', this.runTheGame.bind(this))//event listener for each new object
	}
	runTheGame(){
		document.getElementById(this.targetBox).value ='X'

	}
}
let boxOne = new TicTacToe('b1')
let boxTwo = new TicTacToe('b2')
