
const express = require('express')
const app = express()

// Allowed extensions list can be extended depending on your own needs
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.txt'
  ];
const port = 9090;

app.use('/assets', express.static('dist/gen-web/assets'));


// Redirect all the other resquests
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/gen-web/index.html');
  });

  app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/gen-web/' + req.url);
  });
  
  // Start the server on the provided port
  app.listen(port, () => console.log(`http is started ${port}`));

