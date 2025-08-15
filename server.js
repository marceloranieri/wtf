const httpServer = require('http-server');
const port = parseInt(process.env.PORT || '3000', 10);
const host = '0.0.0.0';
const server = httpServer.createServer({ root: './build', cache: -1 });
server.listen(port, host, () => console.log(`listening on http://${host}:${port}`));
