let connection; //stores the active TCP connection object

const { builtinModules } = require("module");

const setupInput = (conn) => { // connects to host server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
}
// Note: QWERTY keyboard hex key values for commands
const handleUserInput = (key) => { //listener for user input to execute game actions
  if (key === '\u0003') { // Ctrl + C equivalent
    process.exit();
  }
  if (key === '\0077') { // Up - 'w' key equivalent
    connection.write("Move: up");
  }
  if (key === '\0061') { // Left - 'a' key equivalent
    connection.write("Move: left");
  }
  if (key === '\0073') { // Down - 's' key equivalent
    connection.write("Move: down");
  }
  if (key === '\0064') { // Right - 'd' key equivalent
    connection.write("Move: right");
  }
}

exports.module = setupInput;