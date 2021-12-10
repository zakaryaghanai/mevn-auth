// App Module
const app = require('../../app');

// Modules dependencies
/* const http = require('http'); */

// Get port from environment and store in Express
const port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP server
/* const server = http.createServer(app); */

app.listen(port,  console.log(`server starting on localhost:${port}`));