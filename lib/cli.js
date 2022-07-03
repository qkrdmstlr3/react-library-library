import { program, Command } from 'commander';
import packageJson from '../package.json' assert { type: 'json' };
import listCommandAction from './command/list.js';

const showListCommand = new Command('list').description('라이브러리 목록보기').action(listCommandAction);

program.version(packageJson.version);
program.addCommand(showListCommand);
program.parseAsync(process.argv);
