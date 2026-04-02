import { createPayment } from "../services/payment";

export default function PlanPage({ user, premium }) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      {premium ? (
        <div className="text-greem-400 text-xl font bold">
          ✅ Você já é Premium
        </div>
      ) : (
        <button
          onClick={() => createPayment(user)}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Assinar agora
        </button>
      )}
    </section>
  );
}
