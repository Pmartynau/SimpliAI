import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!,{
  apiVersion: "2022-11-15",
  typescript: true,
});

export const createCheckoutSession = async (items) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: "YOUR_SUCCESS_URL",
    cancel_url: "YOUR_CANCEL_URL",
    discounts: [{
      coupon: 'YOUR_COUPON_CODE',
    }],
  });

  return 
};