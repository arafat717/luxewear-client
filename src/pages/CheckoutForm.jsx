import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user?.email);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [cart, refetch] = useCart();
  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  let discountAndShippingPrice = 0;
  if (subtotal) {
    discountAndShippingPrice = subtotal - 20;
  } else {
    discountAndShippingPrice = 0;
  }

  useEffect(() => {
    if (discountAndShippingPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: discountAndShippingPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, discountAndShippingPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confrim error");
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("paymentintent", paymentIntent);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: discountAndShippingPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          itemIds: cart.map((item) => item.itemId),
          status: "pending",
        };
        console.log(payment);
        const res = await axiosSecure.post("/payments", payment);
        refetch();
        navigate("/myaccount/orders");
        if (res?.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment has been succeed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="p-4 border border-gray-300 rounded-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className={`mt-4 w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition ${
          !stripe ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        Payment
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-500 mt-4">transitionId: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
