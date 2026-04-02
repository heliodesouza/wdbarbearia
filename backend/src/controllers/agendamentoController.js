const {
  criarAgendamento,
  listarHorarios,
} = require("../services/agendamentoService");

async function agendar(req, res) {
  try {
    const result = await criarAgendamento(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAgendamentos(req, res) {
  try {
    const { data, profissional } = req.query;

    const lista = await listarHorarios(data, profissional);

    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
}

module.exports = {
  agendar,
  getAgendamentos,
};