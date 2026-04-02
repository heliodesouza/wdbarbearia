import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminAgenda() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function load() {
      const snapshot = await getDocs(collection(db, "agendamentos"));

      const lista = snapshot.docs.map((doc) => doc.data());

      // 🔥 ordenar por data + horário
      lista.sort((a, b) => {
        const dataA = `${a.data} ${a.horario}`;
        const dataB = `${b.data} ${b.horario}`;
        return dataA.localeCompare(dataB);
      });

      setAgendamentos(lista);
    }

    load();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl mb-6 text-center">📅 Agenda da Barbearia</h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        {agendamentos.map((a, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-4 rounded-xl flex justify-between"
          >
            <div>
              <p className="text-yellow-400">
                {a.data} - {a.horario}
              </p>
              <p>{a.profissional}</p>
              <p className="text-gray-400">{a.servico}</p>
            </div>

            <div className="text-sm text-gray-500">
              👤 {a.userId?.slice(0, 6)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}