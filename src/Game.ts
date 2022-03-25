export default class Game {
  points: number[][] = [];

  players: number;

  rows: number;

  columns: number;

  pointsInARowWin: number;

  constructor(players: number, rows: number, columns: number, pointsInARowWin: number) {
    this.players = players;
    this.rows = rows;
    this.columns = columns;
    this.pointsInARowWin = pointsInARowWin;

    this.points = new Array(rows);

    for (let i = 0; i < rows; i++) {
      this.points[i] = new Array(columns).fill(0);
    }
  }

  playMove(player: number, column: number) {
    const { success, row } = this.plotMove(player, column);

    if (success) {
      this.printGrid();
      if (this.checkMoves(player, row, column)) {
        console.log(`Player ${player} WINS`);
      } else {
        console.log('\nNext player turn\n');
      }
    }
  }

  private plotMove(player: number, column: number): { success: boolean; row: number } {
    if (column >= 0 && column < this.columns) {
      for (let row = this.rows - 1; row >= 0; row--) {
        if (this.points[row][column] === 0) {
          this.points[row][column] = player;
          return { success: true, row };
        }
      }
    }
    return { success: false, row: -1 };
  }

  checkMoves(player: number, row: number, column: number) : boolean {
    return this.checkRow(player, row, column) || this.checkColumn(player, row, column) || this.checkDiagonal(player, row, column);
  }

  checkRow(player: number, row: number, column: number): boolean {
    let inARow = [];
    const startIndex = column - this.pointsInARowWin < 0 ? 0 : column - this.pointsInARowWin;
    const endIndex = column + this.pointsInARowWin >= this.columns ? this.columns - 1 : column + this.pointsInARowWin;

    for (let col = startIndex; col <= endIndex; col++) {
      const currentPoint = this.points[row][col];

      if (currentPoint === player) {
        inARow.push(player);
      } else {
        inARow = [];
      }

      if (inARow.length === this.pointsInARowWin) return true;
    }

    return false;
  }

  checkColumn(player: number, row: number, column: number): boolean {
    let inARow = [];
    const startIndex = row - this.pointsInARowWin < 0 ? 0 : row - this.pointsInARowWin;
    const endIndex = row + this.pointsInARowWin >= this.rows ? this.rows - 1 : row + this.pointsInARowWin;

    for (let r = startIndex; r <= endIndex; r++) {
      const currentPoint = this.points[r][column];

      if (currentPoint === player) {
        inARow.push(player);
      } else {
        inARow = [];
      }

      if (inARow.length === this.pointsInARowWin) return true;
    }

    return false;
  }

  checkDiagonal(player: number, row: number, column: number): boolean {
    let leftInARow = [];
    let rightInARow = [];
    const startIndex = row - (this.pointsInARowWin - 1);
    const endIndex = row + (this.pointsInARowWin - 1);

    let startColIndex = column - (this.pointsInARowWin - 1);
    let endColIndex = column + (this.pointsInARowWin - 1);

    for (let r = endIndex; r >= startIndex; r--) {
      if (r >= 0 && r < this.rows) {
        if (startColIndex >= 0 && startColIndex < this.columns) {
          const leftPoint = this.points[r][startColIndex];
          if (leftPoint === player) {
            leftInARow.push(player);
          } else {
            leftInARow = [];
          }
        }
        if (endColIndex >= 0 && endColIndex < this.columns) {
          const rightPoint = this.points[r][endColIndex];
          if (rightPoint === player) {
            rightInARow.push(player);
          } else {
            rightInARow = [];
          }
        }
      }

      if (rightInARow.length === this.pointsInARowWin || leftInARow.length === this.pointsInARowWin) {
        return true;
      }

      startColIndex++;
      endColIndex--;
    }

    return false;
  }

  printGrid() {
    for (let i = 0; i < this.points.length; i++) {
      console.log('|', this.points[i].join(' | '), '|');
    }
    console.log('-------------------------\n');
  }
}
