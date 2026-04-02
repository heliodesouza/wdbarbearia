import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AdminProfissionais() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  async function load() {
    const snapshot = await getDocs(collection(db, "profissionais"));
    setLista(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  useEffect(() => {
    load();
  }, []);

  async function salvar() {
    await addDoc(collection(db, "profissionais"), {
      nome,
      especialidade,
      createdAt: new Date(),
    });

    setNome("");
    setEspecialidade("");
    load();
  }

  async function remover(id) {
    await deleteDoc(doc(db, "profissionais", id));
    load();
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Profissionais</h2>

      {/* FORM */}
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 bg-zinc-800 rounded"
        />

        <input
          placeholder="Especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          className="p-2 bg-zinc-800 rounded"
        />

        <button
          onClick={salvar}
          className="bg-yellow-400 text-black px-4 rounded"
        >
          Adicionar
        </button>
      </div>

      {/* LISTA */}
      <div className="space-y-2">
        {lista.map((p) => (
          <div
            key={p.id}
            className="flex justify-between bg-zinc-900 p-3 rounded"
          >
            <div>
              <p>{p.nome}</p>
              <p className="text-sm text-gray-400">
                {p.especialidade}
              </p>
            </div>

            <button
              onClick={() => remover(p.id)}
              className="text-red-400"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}