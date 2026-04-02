const express = require("express");
const router = express.Router();

const {
  agendar,
  getAgendamentos,
} = require("../controllers/agendamentoController");

router.post("/agendar", agendar);
router.get("/agendamentos", getAgendamentos);

module.exports = router;