const fs = require('fs').promises;

const upTalker = async (newFile) => {
  await fs.writeFile('./talker.json', JSON.stringify([...newFile]), 'utf8');
};

const getTalker = async () => {
  const talkerFile = await fs.readFile('./talker.json', 'utf8');

  return JSON.parse(talkerFile);
};

const editTalker = async (req, res) => {
  const { id } = req.params;
  const talker = req.body;
  const talkerFile = await getTalker();
  const editedFile = { id: +id, ...talker };

  let newFile = talkerFile.filter((t) => +t.id !== +id);
  newFile = [...newFile, editedFile];

  await upTalker(newFile);

  res.status(200).json(editedFile);
};

module.exports = editTalker;