import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PlanPage from "./pages/PlanPage";
import Dashboard from "./pages/dashboard/Dashboard";
import AgendamentoPage from "./pages/AgendamentoPage";
import Admin from "./pages/dashboard/Admin";
import EscolhaAtendimento from "./pages/EscolhaAtendimento";

import Sucesso from "./pages/Sucesso";
import Erro from "./pages/Erro";
import Pendente from "./pages/Pendente";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("USER:", user);
      setUser(user);
      setLoading(false);

      if (user) {
        // 🔥 busca se é premium
        const res = await fetch(`http://localhost:3000/user/${user.uid}`);
        const data = await res.json();

        setPremium(data.premium);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="text-white p-10">Carregando...</div>;
  }

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Navbar />

                {/* STATUS DO USUÁRIO */}
                <div className="text-center mt-6 space-y-2">
                  {user && (
                    <p className="text-green-400 text-sm">👤 {user.email}</p>
                  )}

                  {premium && (
                    <p className="text-yellow-400 font-semibold">
                      ⭐ Usuário Premium Ativo
                    </p>
                  )}
                </div>

                {/* HERO */}
                <div className="mt-10">
                  <Hero />
                </div>

                {/* SOBRE */}
                <div className="mt-16">
                  <About />
                </div>

                <div className="mt-16">
                  <Location />
                </div>

                {/* ÁREA PRINCIPAL */}
                <div className="mt-16 w-full max-w-5xl mx-auto px-4">
                  {premium ? (
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
                      <Dashboard />
                    </div>
                  ) : (
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg text-center">
                      <h2 className="text-xl mb-4 font-semibold">
                        Desbloqueie recursos premium
                      </h2>
                      <PlanPage user={user} />
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-20">
                  <CTA />
                </div>

                {/* FOOTER */}
                <Footer />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* 🔥 NOVA ROTA AGENDAR */}
          <Route path="/agendar" element={<AgendamentoPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<EscolhaAtendimento />} />
          <Route path="/login" element={<Login />} />

          {/* 🔥 ROTAS DE PAGAMENTO */}
          <Route path="/success" element={<Sucesso />} />
          <Route path="/error" element={<Erro />} />
          <Route path="/pending" element={<Pendente />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
