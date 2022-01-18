const express = require('express');
const bodyParser = require('body-parser');
const idPersona = require('./talkerId');
const palestrante = require('./talker');
const loginAutentic = require('./login');
const checaEmail = require('./email');
const checaPassword = require('./password');
const validationWatchedAt = require('./validacoes/validaWatchd');
const validationName = require('./validacoes/validaName');
const validationRate = require('./validacoes/validaRate');
const validationAge = require('./validacoes/validaAge');
const validationTalk = require('./validacoes/validaTalk');
const autenticToken = require('./validacoes/autenticToken');
const newSpeaker = require('./validacoes/newSpeacker');
const deleteSpeacker = require('./deleteSpeacker');
const editTalker = require('./updateTalker');
const resultSearch = require('./searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', palestrante);

app.get('/talker/:id', idPersona);

app.post('/login', checaEmail, checaPassword, loginAutentic);

app.post('/talker', 
  autenticToken, 
  validationName, 
  validationAge,  
  validationTalk,
  validationWatchedAt, 
  validationRate,
  newSpeaker);

app.put('/talker/:id', 
autenticToken, 
validationName, 
validationAge,  
validationTalk,
validationWatchedAt, 
validationRate,
editTalker);

app.delete('/talker/:id', autenticToken, deleteSpeacker);

app.get('/talker/search', autenticToken, resultSearch);

app.listen(PORT, () => {
  console.log('Online');
});
