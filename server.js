const express = require('express');
const app     = express();
const path    = require('path');

const port = process.env.PORT || 8080;

app.set('port', port);
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  console.log('Serving ', req.url);
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
