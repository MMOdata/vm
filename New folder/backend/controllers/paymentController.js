const stripe = require('stripe')('your_stripe_secret_key');

exports.processPayment = async (req, res) => {
  try {
    const { amount, currency, source } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: source,
      confirmation_method: 'manual',
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
