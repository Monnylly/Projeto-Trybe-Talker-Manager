const checkData = (date) => String(date)
  .match(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/);

const validationWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (!checkData(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = validationWatchedAt;
