const fs = require('fs');

const buscaArquivoJson = async () => {
  const arquivo = await fs.promises.readFile('talker.json');
  return JSON.parse(arquivo);
};

const idPersona = async (req, res) => {
  const { id: talkerId } = req.params;
  const pessoas = await buscaArquivoJson();
  const pessoaId = pessoas.find(({ id }) => id === +talkerId);
  if (pessoaId) return res.status(200).json(pessoaId);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
};

module.exports = idPersona;
