import Game from './Game';

console.log('hello world');

const newGame = new Game();

newGame.printGrid();

console.log('new move');
newGame.printGrid();

newGame.playMove(1, 0);
newGame.playMove(1, 5);
newGame.playMove(1, 5);
newGame.playMove(1, 5);
newGame.playMove(1, 5);

console.log('new move');
newGame.printGrid();

// newGame.checkMoves(1);

// TODO: create a microservice for playing a connect 4 game
