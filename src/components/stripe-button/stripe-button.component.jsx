import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JpM8pHhYLnCZ7tqe9jE0cSlW6jRG4o3u0Yh3k1MBLqxN9qgTDYhMlO7fvROkiDBBOg7rzwg55NrLrDvD0Fh3WFA00FWopfkmC";

  const onToken = (token) => {
    console.log("vvhgvhgvhgchgch");
    console.log(token);
    alert("Payment Successful");
  };
  console.log("njbhjbjhbjhjhb");
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
