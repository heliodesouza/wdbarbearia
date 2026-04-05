export default function StepProfissional({ profissionais, onSelect }) {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl text-center">Escolha o profissional</h2>

      {profissionais.map((p) => (
        <div
          key={p.nome}
          onClick={() => onSelect(p)}
          className="bg-zinc-900 p-4 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          {p.foto && (
            <img
              src={p.foto}
              alt={p.nome}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}

          <h3 className="text-lg font-semibold">{p.nome}</h3>
          <p className="text-gray-400 text-sm">{p.especialidade}</p>
        </div>
      ))}
    </div>
  );
}
