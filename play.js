// const net = require('net');

const connect = require('./client');
console.log('Connecting ...');
connect(); // const conn = connect

// connection func returns connection obj -> write to server
// 

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    })
  }
  handleUserInput()
  return stdin;
};
setupInput();
