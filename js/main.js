//I need to create some form of constructor function that can make a class for player one and player two
//The the constructor needs to have a query selector so each player can select a box
//I need to create a function to check for wins, it needs if/else statements for winning conditions
//the function needs a way to pull the value from each box in order to check for wins
//each player needs a method that can differentiate whos turn it is, after the method is called it should change it to the other players turn
let turn = {X:true,
O:false}

class TicTacToe{
	constructor(targetBox){//targetbox is the paramater that we need for each child object and differentiates all of them
		this.targetBox = targetBox//the box that was clicked on the tic tac toe board
		document.getElementById(this.targetBox).addEventListener('click', this.runTheGame.bind(this))//event listener for each new object
	}
	runTheGame(){
		if(turn.X== true){
		document.getElementById(this.targetBox).value ='X'
		console.log('hello shaneece')
		turn.X = false
		turn.O = true
		console.log(turn.O)
		} else{
			document.getElementById(this.targetBox).value = 'O'
			turn.X = true
			turn.O = false
			console.log(turn.O)
		}
	}
}
let boxOne = new TicTacToe('b1')
let boxTwo = new TicTacToe('b2')
let boxThree = new TicTacToe('b3')
let boxFour = new TicTacToe('b4')
let boxFive = new TicTacToe('b5')
let boxSix = new TicTacToe('b6')
let boxSeven = new TicTacToe('b7')
let boxEight = new TicTacToe('b8')
let boxNine = new TicTacToe('b9')
