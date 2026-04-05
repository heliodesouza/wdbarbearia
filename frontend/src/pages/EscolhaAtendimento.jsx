import { useNavigate } from "react-router-dom";

export default function EscolhaAtendimento() {
  const navigate = useNavigate();

  const whatsappLink = "https://wa.me/5531999999999"; // seu número

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-6">

      <h1 className="text-3xl font-bold">Como deseja agendar?</h1>

      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
      >
        Falar no WhatsApp
      </button>

      <button
        onClick={() => navigate("/login")}
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
      >
        Agendar pelo site
      </button>

    </div>
  );
}