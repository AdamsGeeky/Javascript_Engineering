#!/usr/bin/env node
import fetch from 'node-fetch';

// colors for console
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m'
};

// get arguments from command line
const args = process.argv.slice(2);
const usernameIndex = args.findIndex(arg => arg === '-u' || arg === '--username');
const repositoryIndex = args.findIndex(arg => arg === '-r' || arg === '--repository');

// check if arguments are valid
if (usernameIndex === -1 && repositoryIndex === -1 && usernameIndex + 1 >= args.length && repositoryIndex + 1 >= args.length) {
  console.error(colors.red + 'Usage: geekink -u <username> -r <repository>');
  process.exit(1);
} else if (usernameIndex === -1 || usernameIndex + 1 >= args.length) {
  console.error(colors.yellow + 'Usage: geekink -u <username>');
  process.exit(1);
} else if (repositoryIndex === -1 || repositoryIndex + 1 >= args.length) {
  console.error(colors.yellow + 'Usage: geekink -r <repository>');
  process.exit(1);
}
// get username and repository from arguments
const username = args[usernameIndex + 1];
const repository = args[repositoryIndex + 1];

// create url for github api
const url = `https://api.github.com/repos/${username}/${repository}/issues`;

// fetch data from github api 
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(colors.yellow + 'Total number of issues: ' + data.length);

    data.forEach(issue => {
      console.log(colors.green + `-----Issue number: ${issue.number} ------`);
      console.log('Title: ' + issue.title);
      console.log('URL: ' + issue.html_url);
      console.log('State: ' + issue.state);
      console.log(colors.green + '----------------------------------------\n');
      console.log(colors.yellow + '----------------------------------------\n');
    });
  })
  .catch(error => {
    console.error(colors.red + 'Error:', error);
  });
