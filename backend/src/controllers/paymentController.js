const { Preference } = require("mercadopago");
const client = require("../config/mercadoPago");

exports.createPayment = async (req, res) => {
  try {
    const { userId, email } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId obrigatório" });
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            title: "Plano Premium",
            quantity: 1,
            unit_price: 139.9,
            currency_id: "BRL",
          },
        ],

        metadata: { userId, email },

        back_urls: {
          success: "http://localhost:5173/success",
          failure: "http://localhost:5173/error",
          pending: "http://localhost:5173/pending",
        },

        auto_return: "approved",

        notification_url:
          "https://SEU-NGROK.ngrok-free.dev/webhook",
      },
    });

    res.json({ init_point: response.init_point });
  } catch (error) {
    console.error("❌ ERRO CREATE PAYMENT:", error);
    res.status(500).json({ error: "Erro ao criar pagamento" });
  }
};