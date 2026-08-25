const http = require('http');

const server = http.createServer((req, res) =>{
  console.log(req);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Web Server</title></head>');
  res.write('<body><p>Hey! I am excited to learn Node.js</p></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () =>{
  console.log(`server is running on this address http://localhost:${PORT}`);
});