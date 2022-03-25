import Game from './Game';

console.log('hello world');

const newGame = new Game(2, 7, 6, 4);

//   0   1   2   3   4   5            Cols = 6
// | 0 | 0 | 0 | 0 | 0 | 0 |  0                                   check = row: 0, col : 5
// | 0 | 0 | 0 | 0 | 0 | 0 |  1       check = row: 1, col : 0     check = row: 1, col : 4
// | 0 | 0 | 0 | 0 | 0 | 0 |  2       check = row: 2, col : 1     check = row: 2, col : 3
// | 0 | 0 | 1 | 0 | 0 | 0 |  3       check = row: 3, col : 2     check = row: 3, col : 2
// | 0 | 0 | 2 | 1 | 0 | 0 |  4       check = row: 4, col : 3     check = row: 4, col : 1
// | 0 | 0 | 2 | 2 | 1 | 0 |  5       check = row: 5, col : 4     check = row: 5, col : 0
// | 0 | 0 | 2 | 1 | 2 | 1 |  6       check = row: 6, col : 5
//                            Row = 7
newGame.printGrid();

newGame.playMove(1, 5);
newGame.playMove(2, 4);

newGame.playMove(1, 4);
newGame.playMove(2, 3);

newGame.playMove(1, 2);
newGame.playMove(2, 3);

newGame.playMove(1, 3);
newGame.playMove(2, 2);

newGame.playMove(2, 2);
newGame.playMove(1, 2);

newGame.checkDiagonal(1, 3, 2);
// console.log('new move');
// newGame.printGrid();

// newGame.checkMoves(1);

// TODO: create a microservice for playing a connect 4 game
