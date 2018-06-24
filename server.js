const http = require('http');

// Local Imports
const config = require('./config/config');
const app = require('./app'); // express app

// Create HTTP Server
const server = http.createServer(app);
server.listen(config.app.port);
