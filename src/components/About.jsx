import barber from "../assets/barber.png";

export default function About() {
  return (
    <section className="py-24 px-6 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* IMAGEM */}
        <div className="relative w-full md:w-1/2 group">
          <img
            src={barber}
            alt="Barbeiro profissional"
            className="rounded-2xl w-full object-cover shadow-2xl transition duration-500 group-hover:scale-105"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/20 transition"></div>
        </div>

        {/* TEXTO */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Sobre <span className="text-yellow-400">nós</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Somos especialistas em estilo masculino, oferecendo cortes modernos,
            barba e atendimento premium para homens que valorizam aparência e
            confiança.
          </p>

          <p className="text-gray-400 mb-8">
            Nossa missão é elevar sua autoestima com um visual impecável.
          </p>
        </div>
      </div>
    </section>
  );
}


