const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
connect(); // const conn = connect

// connection func returns connection obj -> write to server
// 

setupInput();
