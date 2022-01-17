const fs = require('fs');

const palestrante = (_req, res) => {
  const respArquivo = fs.readFileSync('./talker.json', 'utf-8');
  const palestranteArray = JSON.parse(respArquivo);
  if (palestranteArray.length === 0) {
    return res.status(200).json([]);
  }
  res.status(200).json(palestranteArray);
};

module.exports = palestrante;

// app.get('/talker', (_req, res) => {
//   const palestrante = fs.readFileSync('./talker.json', 'utf-8');
//   const palestranteArray = JSON.parse(palestrante);
//   if (palestranteArray.length === 0) {
//     return res.status(200).json([]);
//   }
//   res.status(200).json(palestranteArray)