const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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