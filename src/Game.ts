export default class Game {
  points: number[][] = [];

  constructor() {
    this.points[0] = [0, 0, 0, 0, 0, 0];
    this.points[1] = [0, 0, 0, 0, 0, 0];
    this.points[2] = [0, 0, 0, 0, 0, 0];
    this.points[3] = [0, 0, 0, 0, 0, 0];
    this.points[4] = [0, 0, 0, 0, 0, 0];
    this.points[5] = [0, 0, 0, 0, 0, 0];
    this.points[6] = [0, 0, 0, 0, 0, 0];
  }

  playMove(player: number, x: number, y: number) {
    if (x <= 6 && y <= 7 && x >= 0 && y >= 0) {
      this.points[x][y] = player;
    }
  }

  checkMoves(player: number) {
    // row match would be x + 1 or x - 1
    // column match would be y + 1 or y - 1
    // diagonal would be (x + 1, y + 1) | (x - 1, y + 1) | (x + 1, y - 1) | (x - 1, y - 1)

    let pointsInARow = [];
    const pointsInAColumn = [];
    const pointsInADiagional = [];
    for (let y = 0; y < this.points.length; y++) {
      for (let x = 0; x < this.points.length; x++) {
        const currentPoint = this.points[y][x];
        if (currentPoint === player) {
          console.log(`player ${player} found at (${x},${y})`);
          pointsInARow.push(player);
        } else {
          pointsInARow = [];
        }

        console.log(pointsInARow);
        if (pointsInARow.length === 4) {
          console.log('Player has won');
          return;
        }
      }
    }
  }

  printGrid() {
    for (let i = 0; i < this.points.length; i++) {
      console.log(this.points[i]);
    }
  }
}
