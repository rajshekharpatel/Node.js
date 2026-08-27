const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from Node.js!</h1>');
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on this address http://localhost:${PORT}`);
});