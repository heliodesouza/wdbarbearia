import { MapPin, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Nossa <span className="text-yellow-400">localização</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* MAPA */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Cam%C3%B5es,+640,+Copacabana,+WDbarbearia&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* TEXTO + BOTÕES */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Venha nos visitar</h3>

            <p className="text-gray-300 mb-6">
              Estamos localizados em uma área de fácil acesso, prontos para te
              oferecer o melhor atendimento e um visual impecável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* BOTÃO MAPA */}
              <a
                href="https://maps.app.goo.gl/6VTXdyZFuhcD6j9G9"
                target="_blank"
                className="bg-yellow-400 flex items-center justify-center gap-2 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                <MapPin size={18} />
                Como chegar
              </a>

              {/* BOTÃO WHATSAPP */}
              <a
                href="https://wa.me/5531999999999"
                target="_blank"
                className="bg-green-500 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1406869831903!2d-43.987227999999995!3d-19.833999300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691ceafd3487d%3A0xb00cad122d814d60!2sR.%20Cam%C3%B5es%2C%20640%20-%20Copacabana%2C%20Belo%20Horizonte%20-%20MG%2C%2031540-560!5e0!3m2!1spt-BR!2sbr!4v1774996530503!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//"https://maps.app.goo.gl/6VTXdyZFuhcD6j9G9"
