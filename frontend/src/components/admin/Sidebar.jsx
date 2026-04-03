export default function Sidebar({ setTab }) {
  return (
    <div className="w-64 bg-black border-r border-zinc-800 p-4">
      <h2 className="text-xl font-bold mb-6 text-yellow-400">
        Barbearia Admin
      </h2>

      <button
        onClick={() => setTab("profissionais")}
        className="block w-full text-left mb-2 p-2 hover:bg-zinc-800 rounded"
      >
        👨‍🔧 Profissionais
      </button>

      <button
        onClick={() => setTab("servicos")}
        className="block w-full text-left p-2 hover:bg-zinc-800 rounded"
      >
        💈 Serviços
      </button>
    </div>
  );
}