import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar  navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <div className="left-items mx-3">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center mx-2">
            <li className="nav-item mx-5">
              <Link to="/" className="nav-link">
                Tech Haven
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto px-4">
          <Link to="/cart">
            <ButtonContainer>
              <span className="mx-2">
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;

//navbar-expand-sm for NavWrapper
