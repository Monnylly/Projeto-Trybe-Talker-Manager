app.delete('/talker/:id', tokenValidation, deleteTalker);

app.put('/talker/:id', tokenValidation,
  talkerNameValidation,
  talkerAgeValidation,
  talkerTalkValidation,
  talkerWatchedAtValidation,
  talkerRateValidation,
  putTalker);

  onst { getTalkerFile, updateTalkerJSON } = require('../utils');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkerFile = await getTalkerFile();

  const newTalkerFile = talkerFile.filter((t) => t.id !== +id);
  await updateTalkerJSON(newTalkerFile);

  res.status(204).json();
};

module.exports = deleteTalker

const { getTalkerFile } = require('../utils');

const getAllTalkers = async (_req, res) => {
  const talkerFile = await getTalkerFile();
  if (talkerFile.length === 0) {
    return res.status(200).send([]);
  }
  res.status(200).json(talkerFile);
};

module.exports = getAllTalkers;

app.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  updateTalker);


  app.delete('/talker/:id', validateToken, deleteTalker);

  const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;

  const content = await fs.readFile('./talker.json');
  const talkers = JSON.parse(content);

  const filteredTalkers = talkers.filter((t) => t.id !== +id);

  console.log(filteredTalkers);

  await fs.writeFile('./talker.json', JSON.stringify(filteredTalkers));

  res.status(204).send('');
};

const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const content = await fs.readFile('./talker.json');
  const talkers = JSON.parse(content);

  const filteredTalkers = talkers.filter((t) => t.id !== +id);
  const talker = talkers.find((t) => t.id === +id);

  Object.assign(talker, { name, age, talk });

  filteredTalkers.push(talker);

  await fs.writeFile('./talker.json', JSON.stringify(filteredTalkers));

  res.status(200).json(talker);
};