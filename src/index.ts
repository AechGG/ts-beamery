import Game from './Game';

console.log('hello world');

const newGame = new Game(2, 7, 6, 4);

newGame.printGrid();

newGame.playMove(1, 0);
newGame.playMove(1, 2);

newGame.playMove(1, 4);
newGame.playMove(1, 5);

newGame.playMove(1, 3);

// console.log('new move');
// newGame.printGrid();

// newGame.checkMoves(1);

// TODO: create a microservice for playing a connect 4 game
