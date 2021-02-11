const net = require('net');
const { IP, PORT } = require('./constant');

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

  conn.on("data", () => {
    console.log("Data Received");
  });
  
  conn.on("connect", () => { // event listener , event handler (callback)
    console.log("Connection successful"); // logs message on client terminal
    conn.write('Name: FML'); //.write method sends reply to server
  });

  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = connect;