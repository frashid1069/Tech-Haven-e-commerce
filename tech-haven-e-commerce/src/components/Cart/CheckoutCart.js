import React from "react";

export default function CheckoutCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1 className="my-5">your cart is currently empty</h1>
          <h1 style={{ color: "var(--mainPink)" }} className="my-5 py-5">
            <strong>❤ thank you for shopping with us ❤</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}
