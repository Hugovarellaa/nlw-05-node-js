import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";
import { query as q } from "faunadb";
import { fauna } from "../../services/faunadb";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_id: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const user = await fauna.query<User>(
      q.Get(q.Match(q.Index("user_by_email"), q.Casefold(session.user.email)))
    );

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
      // metadata
    });

    await fauna.query(
      q.Update(q.Ref(q.Collection("users"), user.ref.id), {
        data: {
          stripe_id: stripeCustomer.id,
        },
      })
    );

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [{ price: "price_1JsSzEH6aihmDxYbnis4Pjbe", quantity: 1 }],
      allow_promotion_codes: true,
      mode: "subscription",
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    res.json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed!");
  }
};
