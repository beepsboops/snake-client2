/*
const handleUserInput = function(key) {
  if (key === "w") {
    console.log("Move: up")
  } else if (key === "a") {
    console.log("Move: left")
  } else if (key === "s") {
    console.log("Move: down")
  } else if (key === "d") {
    console.log("move: right")
  } else if (key === '\u0003') {
      process.exit();
  }
}
*/

// Stores the active TCP connection object.
let connection;

// HANDLEUSERINPUT FUNCTION

const handleUserInput = function(key) {
  console.log(key);
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === '\u0003') {
    process.exit();
  }
};


// SETUP INPUT FUNCTION

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  // console.log(connection)
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;