#! /usr/bin/env node

const chalk = require('chalk');

const fs = require('fs');

fs.readFile(__dirname + '/info.json', 'utf8', function(err,data) {
    if (err) { console.log(err) }
    else { console.log(chalk.red(data)); return data; }
})