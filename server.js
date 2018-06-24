const https = require('https');
const fs = require('fs');

// Local Imports
const config = require('./config/config');
const app = require('./app'); // express app

// Create HTTP Server
const server = https.createServer({
  key: fs.readFileSync(config.testCert.keyPath),
  cert: fs.readFileSync(config.testCert.certPath)
}, app);
server.listen(config.app.port);
