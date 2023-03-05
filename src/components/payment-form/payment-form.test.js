import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { render } from "../../utils/test-utils";
import PaymentForm from "./payment-form.component";

const stripePromise = loadStripe("STRIPE_PUBLISHABLE_API_KEY");

it("should render PaymentForm component", () => {
  const { container } = render(
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
  expect(container).toMatchSnapshot();
});
