import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import PayPalButton from "./PayPalButton";
import CheckoutCart from "./CheckoutCart";

export default function CartTotals({ value /*history*/ }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="ml-sm-5 mt-2 ml-md-auto text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase my-5 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Link to="/checkout">
              <ButtonContainer
                cart
                className="btn btn-outline-danger text-uppercase my-4 px-3"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                <span style={{ paddingRight: "0.7rem" }}>
                  <i className="fas fa-money-check-dollar"></i>
                </span>
                Express Checkout
              </ButtonContainer>
            </Link>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// (col-10) (col-sm-8) for the 3rd div in React.Fragment
