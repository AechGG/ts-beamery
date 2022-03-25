import Game from './Game';

console.log('hello world');

const newGame = new Game();

newGame.printGrid();

newGame.playMove(1, 0, 0);

console.log('new move');
newGame.printGrid();

newGame.playMove(1, 5, 5);
newGame.playMove(1, 5, 4);
newGame.playMove(1, 5, 3);
newGame.playMove(1, 5, 2);
newGame.playMove(1, 6, 0);

console.log('new move');
newGame.printGrid();

newGame.checkMoves(1);

// TODO: create a microservice for playing a connect 4 game
