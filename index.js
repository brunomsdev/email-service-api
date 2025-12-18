require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./src/routes/email");
const app = express();

const port = 4505;

app.use(express.json())

app.use(cors({
  origin: "http://localhost:4467",
  methods: ["GET", "POST"]
}))

app.use(emailRoutes)
  
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
  
