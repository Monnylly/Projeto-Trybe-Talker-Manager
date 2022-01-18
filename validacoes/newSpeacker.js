const fs = require('fs').promises;

const newSpeaker = async (req, res) => {
  const { name, age, talk } = req.body;

  const talkerJson = await fs.readFile('./talker.json');
  const talkers = JSON.parse(talkerJson);

  const speaker = {
    name,
    age,
    id: talkers.length + 1,
    talk,
  };

  talkers.push(speaker);

  await fs.writeFile('./talker.json', JSON.stringify(talkers));

  res.status(201).json(speaker);
};

// resolucao e tira duvidas na monitoria com Renata
module.exports = newSpeaker;
