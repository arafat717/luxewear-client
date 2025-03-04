import { loadStripe } from "@stripe/stripe-js";
import PageCover from "../components/shared/PageCover";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
const Payment = () => {
  return (
    <>
      <PageCover title={"Check Out"}></PageCover>
      <div className="max-w-7xl mx-auto mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </>
  );
};

export default Payment;
