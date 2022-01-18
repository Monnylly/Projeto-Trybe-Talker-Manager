  const fs = require('fs').promises;

  const deleteSpeacker = async (req, res) => {
  const { id } = req.params;

  const fileJson = await fs.readFile('./talker.json');
  const talkers = JSON.parse(fileJson);

  const newTalkerFile = talkers.filter((talker) => talker.id !== +id);
  await fs.writeFile('./talker.json', JSON.stringify(newTalkerFile));

  res.status(204).json();
};

module.exports = deleteSpeacker;
