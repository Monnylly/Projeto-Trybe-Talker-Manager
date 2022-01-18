const autenticToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization.length !== 16) { return res.status(401).json({ message: 'Token inválido' }); }
  if (!authorization) { return res.status(401).json({ message: 'Token não encontrado' }); }
 
  next();
};

module.exports = autenticToken;
