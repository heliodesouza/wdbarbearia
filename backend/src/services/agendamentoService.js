const db = require("../../firebase");

async function criarAgendamento(dados) {
  const { userId, email, profissional, servico, horario, data, preco } = dados;

  if (!userId || !horario || !data) {
    throw new Error("Dados obrigatórios");
  }

  // 🔒 verifica se já existe
  const snapshot = await db
    .collection("agendamentos")
    .where("data", "==", data)
    .where("horario", "==", horario)
    .where("profissional", "==", profissional)
    .get();

  if (!snapshot.empty) {
    throw new Error("Horário já ocupado");
  }

  // ✅ salva
  await db.collection("agendamentos").add({
    userId,
    email,
    profissional,
    servico,
    horario,
    data,
    preco,
    status: "ativo",
    createdAt: new Date(),
  });

  return { success: true };
}

async function listarHorarios(data, profissional) {
  const snapshot = await db
    .collection("agendamentos")
    .where("data", "==", data)
    .where("profissional", "==", profissional)
    .get();

  return snapshot.docs.map((doc) => doc.data().horario);
}

module.exports = {
  criarAgendamento,
  listarHorarios,
};