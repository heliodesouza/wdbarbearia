import { gerarDias } from "../../utils/agendamentoUtils";

export default function StepData({ onSelect, onBack }) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl text-center mb-4">Escolha o dia</h2>

      <div className="grid grid-cols-2 gap-3">
        {gerarDias().map((d) => {
          const fechado = d.diaSemana === 0 || d.diaSemana === 1;

          return (
            <button
              key={d.valor}
              disabled={fechado}
              onClick={() => onSelect(d)}
              className={`p-3 rounded-lg ${
                fechado
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-zinc-900 hover:bg-zinc-800"
              }`}
            >
              {d.label} {fechado && "❌"}
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