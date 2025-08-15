const path = require('path');
const httpServer = require('http-server');
const port = parseInt(process.env.PORT || '5000', 10);
const host = '0.0.0.0';
const server = httpServer.createServer({ root: path.join(__dirname, 'build'), cache: -1 });
server.listen(port, host, () => console.log(`listening on http://${host}:${port}`));
