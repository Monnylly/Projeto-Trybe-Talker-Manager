const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const idPersona = require('./talker');

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

// app.get('/talker/:id', async (req, res) => {
//   //const pessoa = fs.readFile('./talker.json', 'utf-8'); async () => {
//   const arquivo = await fs.promises.readFile('talker.json');
//   const arrayP = JSON.parse(arquivo);
//   const { id: talkersId } = req.params;
//   const pessoaId = arrayP.find(({ id }) => id === +talkersId);
//   if (pessoaId) return res.status(200).json(pessoaId);
//   res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
// }
// });

// app.get('/talker', sendTalkers);

app.get('/talker/:id', idPersona);

app.listen(PORT, () => {
  console.log('Online');
});
