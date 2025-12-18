const { sentEmail } = require("../services/emailService");

async function sendEmail(req, res){
  const { to, toName, subject, html } = req.body;

  try {
    const result = await sentEmail(to, toName, subject, html)

    if(!result.success){
      return res.status(500).send(result.error)
    }

    return res.send(result.data)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }

}

module.exports = {
  sendEmail
}