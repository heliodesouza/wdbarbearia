export function gerarHorarios(data) {
  const diaSemana = new Date(data).getDay();

  if (diaSemana === 0 || diaSemana === 1) return [];

  const horarios = [];
  let hora = 9;
  let minuto = 0;

  while (hora < 18 || (hora === 18 && minuto <= 20)) {
    horarios.push(
      `${String(hora).padStart(2, "0")}:${String(minuto).padStart(2, "0")}`
    );

    minuto += 20;

    if (minuto >= 60) {
      minuto = 0;
      hora++;
    }
  }

  return horarios;
}

export function gerarDias() {
  const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

  const dias = [];

  for (let i = 0; i < 7; i++) {
    const data = new Date();
    data.setDate(data.getDate() + i);

    const diaSemana = data.getDay();

    dias.push({
      label: `${diasSemana[diaSemana]}, ${String(data.getDate()).padStart(2, "0")}/${String(data.getMonth() + 1).padStart(2, "0")}`,
      valor: data.toISOString().split("T")[0],
      diaSemana,
    });
  }

  return dias;
}