import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";

export default function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [filtroData, setFiltroData] = useState("");

  useEffect(() => {
    loadAgendamentos();
  }, []);

  async function loadAgendamentos() {
    const snapshot = await getDocs(collection(db, "agendamentos"));

    const lista = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setAgendamentos(lista);
  }

  async function cancelar(id) {
    await updateDoc(doc(db, "agendamentos", id), {
      status: "cancelado"
    });

    loadAgendamentos();
  }

  const filtrados = filtroData
    ? agendamentos.filter(a => a.data === filtroData)
    : agendamentos;

  const faturamento = filtrados
    .filter(a => a.status !== "cancelado")
    .reduce((total, a) => total + (a.preco || 0), 0);

  return (
    <div className="text-white">
      <h1 className="text-2xl mb-6">📊 Dashboard Barbearia</h1>

      {/* FILTRO */}
      <input
        type="date"
        value={filtroData}
        onChange={(e) => setFiltroData(e.target.value)}
        className="mb-4 p-2 text-black rounded"
      />

      {/* FATURAMENTO */}
      <div className="mb-6 bg-green-600 p-4 rounded-xl">
        💰 Faturamento: R$ {faturamento}
      </div>

      {/* LISTA */}
      <div className="space-y-3">
        {filtrados.map((a) => (
          <div
            key={a.id}
            className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <p><b>{a.profissional}</b> - {a.servico}</p>
              <p>{a.data} às {a.horario}</p>
              <p className="text-sm text-gray-400">{a.email}</p>
              <p className="text-yellow-400">R$ {a.preco}</p>
              <p className={a.status === "cancelado" ? "text-red-400" : "text-green-400"}>
                {a.status}
              </p>
            </div>

            {a.status !== "cancelado" && (
              <button
                onClick={() => cancelar(a.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Cancelar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}