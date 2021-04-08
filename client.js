const net = require('net');
const { IP, PORT } = require('./constants');
// const IP = require('./constants');
// const PORT = require('./constants');
console.log(IP)
console.log(PORT)
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    
    host: IP,
    port: PORT
});
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', data => console.log(data));

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: 604");
    // conn.write("Move: up");
    // setInterval(() => {conn.write("Move: up")}, 1000)
  });

  return conn;
};

module.exports = connect;