const httpServer = require('http-server');

// Use Replit's PORT if present, else 3000 (local)
const port = parseInt(process.env.PORT || '3000', 10);
const host = '0.0.0.0';

// Serve the compiled static site in ./build with no caching
const server = httpServer.createServer({ root: './build', cache: -1 });

server.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
