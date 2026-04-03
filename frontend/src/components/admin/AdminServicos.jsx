import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AdminServicos() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  async function load() {
    const snapshot = await getDocs(collection(db, "servicos"));
    setLista(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  useEffect(() => {
    load();
  }, []);

  async function salvar() {
    await addDoc(collection(db, "servicos"), {
      nome,
      preco: Number(preco),
      createdAt: new Date(),
    });

    setNome("");
    setPreco("");
    load();
  }

  async function remover(id) {
    await deleteDoc(doc(db, "servicos", id));
    load();
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Serviços</h2>

      <div className="flex gap-2 mb-6">
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 bg-zinc-800 rounded"
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="p-2 bg-zinc-800 rounded"
        />

        <button
          onClick={salvar}
          className="bg-yellow-400 text-black px-4 rounded"
        >
          Adicionar
        </button>
      </div>

      <div className="space-y-2">
        {lista.map((s) => (
          <div
            key={s.id}
            className="flex justify-between bg-zinc-900 p-3 rounded"
          >
            <p>{s.nome} - R$ {s.preco}</p>

            <button
              onClick={() => remover(s.id)}
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