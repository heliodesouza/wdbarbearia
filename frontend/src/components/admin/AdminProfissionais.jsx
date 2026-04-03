import { useState, useEffect } from "react";
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    const snapshot = await getDocs(collection(db, "profissionais"));
    setLista(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  useEffect(() => {
    load();
  }, []);

  function handleImagem(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImagem(file);
    setPreview(URL.createObjectURL(file));
  }

  async function salvar() {
    if (!nome || !especialidade) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let fotoUrl = "";

    try {
      // 🔥 upload imagem
      if (imagem) {
        const storageRef = ref(
          storage,
          `profissionais/${Date.now()}-${imagem.name}`
        );

        await uploadBytes(storageRef, imagem);
        fotoUrl = await getDownloadURL(storageRef);
      }

      // 🔥 salva no firestore
      await addDoc(collection(db, "profissionais"), {
        nome,
        especialidade,
        foto: fotoUrl,
        createdAt: new Date(),
      });

      // reset
      setNome("");
      setEspecialidade("");
      setImagem(null);
      setPreview(null);

      load();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar");
    }

    setLoading(false);
  }

  async function remover(id) {
    await deleteDoc(doc(db, "profissionais", id));
    load();
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Profissionais</h2>

      {/* FORM */}
      <div className="flex flex-col gap-3 mb-6 bg-zinc-900 p-4 rounded-xl">
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

        {/* 🔥 upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImagem}
          className="text-sm"
        />

        {/* 🔥 preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}

        <button
          onClick={salvar}
          disabled={loading}
          className="bg-yellow-400 text-black py-2 rounded"
        >
          {loading ? "Salvando..." : "Adicionar"}
        </button>
      </div>

      {/* LISTA */}
      <div className="space-y-3">
        {lista.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between bg-zinc-900 p-3 rounded"
          >
            <div className="flex items-center gap-3">
              {/* 🔥 imagem */}
              {p.foto && (
                <img
                  src={p.foto}
                  alt={p.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}

              <div>
                <p className="font-semibold">{p.nome}</p>
                <p className="text-sm text-gray-400">
                  {p.especialidade}
                </p>
              </div>
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