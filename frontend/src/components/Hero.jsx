import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "80%" }}
    >
      {/* overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Sua melhor versão começa aqui
        </h1>

        <p className="text-gray-300 mb-6">Esse é o seu momento!</p>

        <button
          onClick={() => navigate("/agendar")}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Agendar agora
        </button>
      </div>
    </div>
  );
}
