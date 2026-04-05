import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function cadastrar() {
    await createUserWithEmailAndPassword(auth, email, senha);
    navigate("/agendar");
  }

  async function login() {
    await signInWithEmailAndPassword(auth, email, senha);
    navigate("/agendar");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-4">
      <h2 className="text-2xl">Entrar ou Cadastrar</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 bg-zinc-800 rounded"
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
        className="p-2 bg-zinc-800 rounded"
      />

      <div className="flex gap-3">
        <button onClick={login} className="bg-green-500 px-4 py-2 rounded">
          Entrar
        </button>

        <button onClick={cadastrar} className="bg-yellow-400 text-black px-4 py-2 rounded">
          Cadastrar
        </button>
      </div>
    </div>
  );
}