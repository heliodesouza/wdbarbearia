export default function Erro() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-4">
        Pagamento não concluído ❌
      </h1>

      <p className="text-gray-400 mb-6">
        Algo deu errado. Tente novamente.
      </p>

      <a
        href="/"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Voltar e tentar novamente
      </a>

    </div>
  );
}