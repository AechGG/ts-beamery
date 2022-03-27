// TODO: create a terminal for playing a connect 4 game
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import GameController from './GameController';

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Connect 4', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  );
};

const startQuestions = () => {
  const questions = [
    {
      name: 'START_GAME',
      type: 'list',
      message: 'Start a new game?',
      choices: ['Y', 'N'],
    },
  ];
  return inquirer.prompt(questions);
};

const validateNumbers = (moreValidationChecks, clearNumberValue: number) => ({
  validate: (input) => {
    if (input === '') {
      return 'Please provide a valid number greater then 0';
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) => (Number.isNaN(input) || Number(input) <= clearNumberValue ? '' : Number(input)),
});

const setupQuestions = () => {
  const questions = [
    {
      name: 'GRID',
      type: 'list',
      message: 'Size of the grid?',
      choices: ['6x7', '7x8', '8x9'],
      filter: (val: string) => val.split('x').map((val2: string) => Number.parseInt(val2, 10)),
    },
    {
      name: 'ROW_COUNT',
      type: 'number',
      message: 'Points in a row to win',
      ...validateNumbers((input) => {
        if (Number(input) <= 1) {
          return 'Must be greater than one';
        }
        return true;
      }, 1),
    },
    {
      name: 'PLAYERS',
      type: 'number',
      message: 'Number of players?',
      ...validateNumbers((input) => {
        if (Number(input) <= 1) {
          return 'Must be greater than one';
        }
        return true;
      }, 1),
    },
  ];
  return inquirer.prompt(questions);
};

const gameController = new GameController();

const run = async () => {
  // show script introduction
  init();
  // ask questions
  const answers = await startQuestions();
  const { START_GAME } = answers;

  if (START_GAME === 'Y') {
    console.log('Start Game');
    const { GRID, ROW_COUNT, PLAYERS } = await setupQuestions();
    await gameController.playGame(PLAYERS, GRID[1], GRID[0], ROW_COUNT);
  }
};

run();
