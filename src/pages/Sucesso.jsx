export default function Sucesso() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-4">
        Pagamento aprovado ✅
      </h1>

      <p className="text-gray-400 mb-6">
        Seu plano foi ativado com sucesso!
      </p>

      <a
        href="/"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Voltar para o site
      </a>

    </div>
  );
}