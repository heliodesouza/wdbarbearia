import { useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");

  function addCliente() {
    if (!nome) return;

    setClientes([...clientes, nome]);
    setNome("");
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl mb-2">👤 Clientes</h2>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        className="p-2 text-black rounded mr-2"
      />

      <button
        onClick={addCliente}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Adicionar
      </button>

      <ul className="mt-3">
        {clientes.map((c, i) => (
          <li key={i}>• {c}</li>
        ))}
      </ul>
    </div>
  );
}