const connect = require('./client.js');
const setupInput = require('./input');

console.log('Connecting ...');

// Update the setupInput function within input module to accept a conn parameter and set it as the value for the connection variable.
// Update play.js to send the connection object returned from connect() into our setupInput() function
setupInput(connect());