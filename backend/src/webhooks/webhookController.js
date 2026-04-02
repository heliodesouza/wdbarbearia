const { Payment } = require("mercadopago");
const client = require("../config/mercadoPago");
const users = require("../database/fakeDB");

exports.handleWebhook = async (req, res) => {
  try {
    if (req.body.type === "payment") {
      const paymentId = req.body.data.id;

      const payment = await new Payment(client).get({ id: paymentId });

      if (payment.status === "approved") {
        const userId = payment.metadata?.userId;

        if (userId) {
          users[userId] = {
            premium: true,
            email: payment.metadata.email,
          };
        }
      }
    }

    res.sendStatus(200);
  } catch (err) {
    console.error("❌ WEBHOOK ERROR:", err);
    res.sendStatus(500);
  }
};