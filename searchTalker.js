const fs = require('fs').promises;

const resultSearch = async (req, res) => {
  const { q: key } = req.query;
  const content = await fs.readFile('./talker.json');
  const searchRes = JSON.parse(content);

  if (!key) {
    return res.status(200).json(searchRes);
  }

  const filter = searchRes.filter((s) => s.name.includes(key));
  
  return res.status(200).json(filter);

};

module.exports = resultSearch;
