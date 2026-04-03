import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import StepProfissional from "../components/agendamento/StepProfissional";
import StepServico from "../components/agendamento/StepServico";
import StepData from "../components/agendamento/StepData";
import StepHorario from "../components/agendamento/StepHorario";
import ProgressBar from "../components/agendamento/ProgressBar";

export default function AgendamentoPage() {
  const [step, setStep] = useState(1);

  // 🔥 estados principais
  const [profissionais, setProfissionais] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [profissional, setProfissional] = useState(null);
  const [servico, setServico] = useState(null);

  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [ocupados, setOcupados] = useState([]);

  const navigate = useNavigate();

  // 🔥 carregar tudo
  useEffect(() => {
    async function loadDados() {
      try {
        // 📌 profissionais
        const profSnap = await getDocs(collection(db, "profissionais"));
        const listaProf = profSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProfissionais(listaProf);

        // 📌 serviços
        const servSnap = await getDocs(collection(db, "servicos"));
        const listaServ = servSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setServicos(listaServ);

        // 📌 agendamentos (horários ocupados)
        const agSnap = await getDocs(collection(db, "agendamentos"));
        const listaAg = agSnap.docs.map(doc => {
          const d = doc.data();
          return `${d.data}-${d.horario}`;
        });

        setOcupados(listaAg);

      } catch (error) {
        console.error("ERRO AO CARREGAR DADOS:", error);
      }
    }

    loadDados();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-6">
      <button onClick={() => navigate("/")} className="self-start mb-6">
        ← Voltar
      </button>

      <ProgressBar step={step} />

      {/* PASSO 1 */}
      {step === 1 && (
        <StepProfissional
          profissionais={profissionais}
          onSelect={(p) => {
            setProfissional(p);
            setStep(2);
          }}
        />
      )}

      {/* PASSO 2 */}
      {step === 2 && (
        <StepServico
          servicos={servicos}
          onSelect={(s) => {
            setServico(s);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}

      {/* PASSO 3 */}
      {step === 3 && (
        <StepData
          onSelect={(d) => {
            setDataSelecionada(d);
            setStep(4);
          }}
          onBack={() => setStep(2)}
        />
      )}

      {/* PASSO 4 */}
      {step === 4 && (
        <StepHorario
          dataSelecionada={dataSelecionada}
          profissional={profissional}
          servico={servico}
          ocupados={ocupados}
          setOcupados={setOcupados}
          onBack={() => setStep(3)}
        />
      )}
    </div>
  );
}
