const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Routing Server</title></head>');
  res.write('<body><p>Hey Cuties, this side Raj Shekhar.</p></body>');
  res.write('</html>');
   return res.end();
  }
  else if(req.url === '/products'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Introduction about my products.</title></head>');
  res.write('<body><p>If you wanna buy any thing you can comehere and purchase it.</p></body>');
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Thank You</title></head>');
  res.write('<body><p>Visit More.</p></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server is running on this address http://localhost:${PORT}`);
});
