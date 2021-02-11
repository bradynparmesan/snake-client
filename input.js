const { builtinModules } = require("module");

const setupInput = (conn) => { // connects to host server
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (key) => { //listener for user input to execute game actions
  if (key === '\u0003') { // Ctrl + C equivalent
    process.exit();
  }
}

exports.module = setupInput;