import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PRGqA08sO0j1pG4qKLI3AbtvSW1BnyJMsxkIWOf6RsbwmM2X455P47GRawr2uCfrSg1ZH1NQWE8RGUzI2e26XLL00iz49GvbD"
);

const CheckoutForm = ({ planId, userId, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      try {
        const response = await fetch(
          "https://gymsmart-backend.onrender.com/gym/smart/suscripciones/api/post/realizar-pago",
          // "http://localhost:3000/gym/smart/suscripciones/api/post/realizar-pago",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentMethodId: paymentMethod.id,
              amount,
              currency: "usd",
              userId,
              planId,
              cursoId: 1,
            }),
          }
        );

        const paymentResult = await response.json();

        if (paymentResult.success) {
          setSuccess(true);
        } else {
          setError(paymentResult.message || "Error al procesar el pago");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Error al procesar el pago");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {error && <div>{error}</div>}
      {success && <div>Pago realizado con éxito</div>}
    </form>
  );
};

const Subscriptions = () => {
  const plans = [
    { id: 1, name: "Mensual", price: 4999 },
    { id: 2, name: "Trimestral", price: 12999 },
    { id: 3, name: "Anual", price: 39999 },
  ];
  const userId = 1; // Reemplaza con el ID del usuario autenticado

  return (
    <div className="my-8 max-md:mt-2 max-w-screen-2xl w-11/12 mx-auto">
      <h1 className="font-bold text-3xl text-[#262628]">Nuestros planes</h1>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="mt-1 p-4 shadow-xl rounded-lg">
            <h2 className="font-bold text-2xl">{plan.name}</h2>
            <p>Precio: S/.{(plan.price / 100).toFixed(2)}</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                planId={plan.id}
                userId={userId}
                amount={plan.price}
              />
            </Elements>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
