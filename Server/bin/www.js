// This will be our application entry. We'll setup our server here.
const http = require('http');
// express app we just MADE
const app = require('../app');
console.log(app, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')

const port = parseInt(process.env.PORT, 10) || 1009;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

