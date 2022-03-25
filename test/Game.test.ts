import Game from '../src/Game';

describe('Game', () => {
  it(' creates a new game with a set size', () => {
    const rows = 5;
    const cols = 6;
    const testGame = new Game(2, rows, cols, 4);

    expect(testGame.points.length).toBe(rows);
    expect(testGame.points[0].length).toBe(cols);
    expect(testGame.points[0]).toStrictEqual(new Array(cols).fill(0));
  });

  it(' allows two players to make their moves ', () => {
    const rows = 5;
    const cols = 6;
    const testGame = new Game(2, rows, cols, 4);

    testGame.playMove(1, 4);
    testGame.playMove(2, 3);

    expect(testGame.points[rows - 1][4]).toStrictEqual(1);
    expect(testGame.points[rows - 1][3]).toStrictEqual(2);
  });

  it(' allows player moves go on top of each other', () => {
    const rows = 5;
    const cols = 6;
    const testGame = new Game(2, rows, cols, 4);

    testGame.playMove(1, 4);
    testGame.playMove(1, 4);
    testGame.playMove(1, 4);

    expect(testGame.points[rows - 1][4]).toStrictEqual(1);
    expect(testGame.points[rows - 2][4]).toStrictEqual(1);
    expect(testGame.points[rows - 3][4]).toStrictEqual(1);
  });

  it(' play is not plotted outside of size', () => {
    const rows = 5;
    const cols = 6;
    const testGame = new Game(2, rows, cols, 4);

    // pre move
    expect(testGame.points[0].filter((val) => val === 0).length).toStrictEqual(cols);

    testGame.playMove(1, 9);

    // post move
    expect(testGame.points[0].filter((val) => val === 0).length).toStrictEqual(cols);
  });

  it(' win in a row', () => {
    const rows = 5;
    const cols = 8;
    let testGame = new Game(2, rows, cols, 4);

    testGame = new Game(2, rows, cols, 4);
    // Player 1 moves 4 across the bottom
    testGame.playMove(1, 0);
    testGame.playMove(2, 7);
    testGame.playMove(1, 1);
    testGame.playMove(2, 6);
    testGame.playMove(1, 2);
    testGame.playMove(2, 5);
    testGame.playMove(1, 3);

    // post move
    expect(testGame.checkRow(1, rows - 1, 3)).toStrictEqual(true);
    expect(testGame.checkRow(2, rows - 1, 3)).toStrictEqual(false);

    testGame = new Game(2, rows, cols, 4);
    // Player 1 moves 4 across the bottom after 2 blocks
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 2);
    testGame.playMove(2, 1);
    testGame.playMove(1, 3);
    testGame.playMove(2, 2);
    testGame.playMove(1, 4);
    testGame.playMove(2, 3);
    testGame.playMove(1, 5);

    // post move
    expect(testGame.checkRow(1, rows - 1, 3)).toStrictEqual(true);
    expect(testGame.checkRow(2, rows - 1, 3)).toStrictEqual(false);
  });

  it(' win in a column', () => {
    const rows = 5;
    const cols = 2;
    let testGame = new Game(2, rows, cols, 4);

    testGame = new Game(2, rows, cols, 4);
    // Player 1 moves 4 up
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);

    // post move
    expect(testGame.checkColumn(1, 0, 0)).toStrictEqual(true);
    expect(testGame.checkColumn(2, 0, 1)).toStrictEqual(false);

    testGame = new Game(2, rows, cols, 4);
    // Player 2 moves 4 along the column but gets blocked once
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 1);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);
    testGame.playMove(1, 0);
    testGame.playMove(2, 1);

    // post move
    expect(testGame.checkColumn(1, 1, 0)).toStrictEqual(true);
    expect(testGame.checkColumn(2, 1, 1)).toStrictEqual(false);
  });

  it(' win in a diagonal', () => {
    const rows = 5;
    const cols = 6;
    let testGame = new Game(2, rows, cols, 4);

    testGame = new Game(2, rows, cols, 4);
    // Player 1 moves 4 up
    testGame.playMove(1, 4);
    testGame.playMove(2, 3);

    testGame.playMove(1, 3);
    testGame.playMove(2, 2);

    testGame.playMove(1, 1);
    testGame.playMove(2, 2);

    testGame.playMove(1, 2);
    testGame.playMove(2, 1);

    testGame.playMove(2, 1);
    testGame.playMove(1, 1);

    // post move
    expect(testGame.checkDiagonal(1, 1, 1)).toStrictEqual(true);
    expect(testGame.checkDiagonal(2, 1, 1)).toStrictEqual(false);
  });
});
