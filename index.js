require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sentEmail } = require("./src/services/emailService");
const app = express();

const port = 4505;

app.use(express.json())

app.use(cors({
  origin: "http://localhost:4467",
  methods: ["GET", "POST"]
}))

app.get("/", async (req, res) => {
  const { token } = req.headers;

  if(!token){
    return res.status(401).send("Token não fornecido")
  }

  if(token !== "Habibs"){
    return res.status(401).send("Token inválido")
  }

  try {
    const result = await sentEmail(
      'bruno.dev.ms@gmail.com',
      'Bruno Milhomens',
      'Teste de email',
      '<p>Teste</p>'
    );

      if(!result.success){
        return res.status(500).send(result.error)
      }

      return res.send(result.data)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }

})
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })
  
