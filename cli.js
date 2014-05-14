#!/usr/bin/env node

var datput = require('./')

var argv = require('minimist')(process.argv.slice(2));

datput(argv._, argv.remote)