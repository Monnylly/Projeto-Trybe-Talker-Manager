const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_req, res) => {
  const palestrante = fs.readFileSync('./talker.json', 'utf-8');
  const palestranteArray = JSON.parse(palestrante);
  if (palestranteArray.length === 0) {
    return res.status(200).json([]);
  }
  res.status(200).json(palestranteArray);
});

app.listen(PORT, () => {
  console.log('Online');
});
