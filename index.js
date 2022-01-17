const express = require('express');
const bodyParser = require('body-parser');
const idPersona = require('./talkerId');
const palestrante = require('./talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// app.get('/talker', sendTalkers);
app.get('/talker', palestrante);

app.get('/talker/:id', idPersona);

app.listen(PORT, () => {
  console.log('Online');
});
