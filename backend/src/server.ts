import express from 'express';

const app = express();
const port = undefined;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port!, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
