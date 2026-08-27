const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Registration Form</title></head>');
    res.write('<body>');

    res.write('<h1>Enter your Details:</h1>');
    res.write('<h1>Welcome to Home Page</h1>');

    res.write('<form action="/submit-details" method="POST">');

    res.write('<input type="text" id="name" name="name" placeholder="Enter your Name"><br><br>');

    res.write('<label for="gender">Gender:</label>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');

    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    return res.end();
  }

  else if (req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST') {

    fs.writeFileSync('user.txt', 'Raj Shekhar');

    res.statusCode = 302;
    res.setHeader('Location', '/');

    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');

  res.write('<html>');
  res.write('<head><title>Storing Details</title></head>');
  res.write('<body><h2>Page not Found</h2></body>');
  res.write('</html>');

  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on this Address http://localhost:${PORT}`);
});