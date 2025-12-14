#!/usr/bin/env node
import { Command } from 'commander';
import { parse } from '../src/parse.js';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(function (arg, arg2) {
    let file1 = parse(arg)
    let file2 = parse(arg2)
    
  })

program.parse();