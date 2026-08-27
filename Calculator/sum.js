const sumRequestHandler = (req, res) => {

  console.log("In Sum Request Handler", req.url);

  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {

    const bodyStr = Buffer.concat(body).toString();

    const params = new URLSearchParams(bodyStr);

    const bodyObj = Object.fromEntries(params);

    const result = Number(bodyObj.First) + Number(bodyObj.Second);

    console.log(result);

    res.setHeader('Content-Type', 'text/html');

    res.write(`
      <html>
        <head>
          <title>Calculator Result</title>
        </head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Go Back</a>
        </body>
      </html>
    `);

    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;