import { gerarHorarios } from "../../utils/agendamentoUtils";
import { auth } from "../../firebase";

export default function StepHorario({
  dataSelecionada,
  profissional,
  servico,
  ocupados,
  setOcupados,
  onBack,
}) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl text-center mb-4">
        Horários ({dataSelecionada?.label})
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {gerarHorarios(dataSelecionada?.valor).map((h) => {
          const chave = `${dataSelecionada?.valor}-${h}`;
          const ocupado = ocupados.includes(chave);

          return (
            <button
              key={h}
              disabled={ocupado}
              onClick={async () => {
                const user = auth.currentUser;

                if (!user) {
                  alert("Faça login primeiro!");
                  return;
                }

                const res = await fetch("http://localhost:3000/agendar", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userId: user.uid,
                    email: user.email,
                    profissional: profissional.nome,
                    servico: servico.nome,
                    horario: h,
                    data: dataSelecionada.valor,
                    preco: servico.preco,
                  }),
                });

                const data = await res.json();

                if (data.error) {
                  alert(data.error);
                } else {
                  alert(`Agendado às ${h} ✅`);
                  setOcupados((prev) => [...prev, chave]);
                }
              }}
              className={`py-2 rounded-lg ${
                ocupado
                  ? "bg-gray-700 text-gray-400"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {h} {ocupado && "❌"}
            </button>
          );
        })}
      </div>

      <button onClick={onBack} className="text-sm text-gray-400 mt-4">
        ← Voltar
      </button>
    </div>
  );
}