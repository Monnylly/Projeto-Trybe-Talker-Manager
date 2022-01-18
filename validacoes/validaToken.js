const validaToken = (req, res) => {
  const { authorization } = req.body;
  if (!authorization) {
 return res.status(401).json({ message: 'Token inválido' }); 
} 
if (authorization.length !== 16) { return res.status(401).json({ message: 'Token inválido' }); }
  return res.status(200).json(authorization);
};
module.exports = validaToken;
