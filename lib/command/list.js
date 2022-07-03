import chalk from 'chalk';
import inquirer from 'inquirer';
import { getData } from '../aws.js';
import { execSync } from 'child_process';
import { ENCODING } from '../common/index.js';

const NPM = 'npm install';
const YARN = 'yarn add';
const CLOSE = '닫기';
const NPM_PATH = 'https://www.npmjs.com/package/';

const makeGreenChalk = (f, b) => `${chalk.green(f)} : ${b}`;
const getDefaultChoices = (lib) => [`${NPM} ${lib}`, `${YARN} ${lib}`, CLOSE].map((cmd) => makeGreenChalk('기타', cmd));
const inquireList = async (name, message, choices) => await inquirer.prompt([{ type: 'list', name, message, choices }]);

const executeCommand = (destination) => {
  const [_, cmd] = destination.split(' : ');
  if (cmd === CLOSE) return;
  if (cmd.includes(NPM) || cmd.includes(YARN)) return execSync(cmd, ENCODING);
  return execSync(`open ${cmd}`, ENCODING);
};

export default async () => {
  const list = await getData();
  const { categoryName } = await inquireList('categoryName', '카테고리 선택', Object.keys(list));

  const libList = list[categoryName].map((lib) => lib.name);
  const { libName } = await inquireList('libName', '라이브러리 선택', libList);

  const lib = list[categoryName].find((lib) => lib.name === libName);
  const [_, ...linkes] = Object.entries(lib).map((kv) => makeGreenChalk(...kv));
  const libNpmName = lib.npm.replace(NPM_PATH, '');
  const { destination } = await inquireList('destination', '동작 선택', [...linkes, ...getDefaultChoices(libNpmName)]);

  try {
    console.log('⭐️ 동작 시작');
    executeCommand(destination);
    console.log('🌟 동작 완료');
  } catch (error) {
    console.log('🚨 동작 중지');
  }
};
