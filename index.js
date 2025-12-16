const express = require("express");
const cors = require("cors");
const app = express();

const port = 4505;

app.use(cors({
  origin: "http://localhost:4467",
  methods: ["GET", "POST"]
}))

app.get("/", (req, res) => {
  const { token } = req.headers;

  if(!token){
    return res.status(401).send("Token não fornecido")
  }

  if(token !== "Habibs"){
    return res.status(401).send("Token inválido")
  }

  console.log("Email enviado");
  res.send("Email enviado")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})