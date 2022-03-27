import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import Game from './Game';

export default class GameController {
  validateNumbers(moreValidationChecks, clearNumberValueMin: number, clearNumberValueMax: number) {
    return {
      validate: (input) => {
        if (input === '') {
          return `Please provide a valid number greater then 0 and less than or equal to ${clearNumberValueMax}`;
        }
        return moreValidationChecks ? moreValidationChecks(input) : true;
      },
      filter: (input) => (Number.isNaN(input) || Number(input) <= clearNumberValueMin || Number(input) > clearNumberValueMax ? '' : Number(input)),
    };
  }

  gameQuestions(maxColumns: number) {
    const questions = [
      {
        name: 'SELECTED_COLUMN',
        type: 'number',
        message: 'Pick a column to play a counter',
        ...this.validateNumbers((input) => {
          if (Number(input) < 0) {
            return 'Must be greater than zero';
          }
          if (Number(input) > maxColumns) {
            return 'Must be below the number of columns';
          }
          return true;
        }, 0, maxColumns),
      },
    ];
    return inquirer.prompt(questions);
  }

  async playGame(players: number, rows: number, columns: number, pointsInARowWin: number) {
    const newGame = new Game(players, rows, columns, pointsInARowWin);
    while (true) {
      newGame.printGrid();
      const currentPlayer = newGame.currentPlayerTurn();
      console.log(chalk.green(`Players ${currentPlayer} turn`));
      // eslint-disable-next-line no-await-in-loop
      const { SELECTED_COLUMN } = await this.gameQuestions(columns);
      if (newGame.playMove(currentPlayer, SELECTED_COLUMN - 1)) {
        newGame.printGrid();
        console.log(
          chalk.green(
            figlet.textSync(`Player ${currentPlayer} WINS`, {
              horizontalLayout: 'default',
              verticalLayout: 'default',
            }),
          ),
        );
        break;
      }
    }
  }
}
