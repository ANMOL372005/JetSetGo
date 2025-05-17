const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_a0RWs6HwuZRfTO',
  key_secret: 'Is7nG5sz7esmam8TassSlrtR'
});

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // amount in smallest currency unit (paise for INR)
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Payment initiation error:', error);
    res.status(500).json({
      success: false,
      message: 'Error initiating payment'
    });
  }
}; 