async function authSecret(req, res, next) {
  const { token } = req.headers;

  if(!token){
    return res.status(401).send("Token não fornecido")
  }

  if(token !== process.env.SECRET_TOKEN){
    return res.status(401).send("Token inválido")
  }

  next()
}

module.exports = {
  authSecret
}