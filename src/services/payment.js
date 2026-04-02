import { auth } from "../firebase";
import { loginWithGoogle } from "./login-temp";

export async function createPayment() {
  try {
    let user = auth.currentUser;

    // 🔐 garante login
    if (!user) {
      user = await loginWithGoogle();
    }

    const res = await fetch("http://localhost:3000/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
      }),
    });

    if (!res.ok) {
      throw new Error("Erro no servidor");
    }

    const data = await res.json();

    console.log("RESPOSTA BACKEND:", data);

    if (!data.init_point) {
      alert("Erro ao criar pagamento");
      return;
    }

    // 🔥 redireciona pro checkout
    window.location.href = data.init_point;

  } catch (error) {
    console.error("❌ ERRO PAYMENT FRONT:", error);
    alert("Erro ao iniciar pagamento");
  }
}