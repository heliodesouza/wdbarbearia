export default function StepServico({ servicos, onSelect, onBack }) {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl text-center">Serviços</h2>

      {servicos.map((s) => (
        <div
          key={s.nome}
          onClick={() => onSelect(s)}
          className="bg-zinc-900 p-4 rounded-xl cursor-pointer hover:bg-zinc-800 flex justify-between"
        >
          <span>{s.nome}</span>
          <span className="text-yellow-400">R$ {s.preco}</span>
        </div>
      ))}

      <button onClick={onBack} className="text-sm text-gray-400 mt-4">
        ← Voltar
      </button>
    </div>
  );
}