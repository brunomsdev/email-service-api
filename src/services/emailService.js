const { MailerSend } = require("mailersend");

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY
})

async function sentEmail(to, toName, subject, html, text=""){
  try {
    const sendEmail = await mailerSend.email.send({
      from: {
        email: process.env.MAILERSEND_FROM_EMAIL,
        name: process.env.MAILERSEND_FROM_NAME,
        to: [
          {
          email: to,
          name: toName || to,
          }
        ],
        subject: subject,
        html: html,
        text: text
      }
    })

    return {
      success: true,
      data: sendEmail
    }

  } catch (error) {
      console.error(error);
      return {
        success: false,
        error: error.message
    };
  }
}

module.exports = {
  sentEmail
}