const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World I am Allen!');
});

app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${port}`);
});