async function validateSendEmail(req, res, next){
  const { to, toName, subject, html } = req.body;

  if(!to || !toName || !subject || !html){
    return res.status(400).send("Todos os campos são obrigatórios")
  }

  if(!to.includes("@")){
    return res.status(400).send("Email inválido")
  }

  next()
}

module.exports = {
  validateSendEmail
}