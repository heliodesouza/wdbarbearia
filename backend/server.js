const express = require("express");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./src/routes/paymentRoutes");
const userRoutes = require("./src/routes/userRoutes");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const { handleWebhook } = require("./src/webhooks/webhookController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend rodando 🚀");
});

app.use(paymentRoutes);
app.use(userRoutes);
app.use(agendamentoRoutes); // 👈 AQUI

app.post("/webhook", handleWebhook);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});